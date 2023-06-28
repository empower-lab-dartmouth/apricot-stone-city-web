import {SetterOrUpdater} from 'recoil';
import {PageData} from '../components/page/page-model';
import {CardData} from '../components/card/card-model';
import {OptionData} from '../components/option/option-model';
import {fetchContinueConversationData} from '../utils/data-utils';
import {Stores} from '../utils/stores';
import {doc, setDoc} from 'firebase/firestore';
import {db} from '../components/firebase/firebase-config';
import {SceneFeedbackDialog, SceneUUID, StoryScene} from './recoil';
import {find, isEqual} from 'lodash';
import {sampleAction} from './sample-data';

const appendToPage: (pageData: PageData,
    selectedOption: OptionData,
    newCards: CardData[],
    newOptions: OptionData[],
    newStores: Stores) => PageData = (page,
        selectedOption, newCards, newOptions, newStores) => ({
      currentStores: newStores,
      chatHistory: [...page.chatHistory, selectedOption, ...newCards],
      options: newOptions,
    });

const uploadPageToFB = async (newPage: PageData, username: string) => {
  // do firebase stuff to write
  console.log('sending page data to fb');
  try {
    await setDoc(
        doc(db, 'PageData', username), newPage);
    console.log('Document written to fb');
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

const updateCompletedScenes = async (completedScenes: Set<string>,
    username: string) => {
  console.log('sending completed scenes to fb');
  try {
    await setDoc(
        doc(db, 'CompletedScenes', username), {
          scenes: Array.from(completedScenes),
        });
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};


const findSceneWithPath: (allStoryScenes: Record<SceneUUID,
  StoryScene>, path: string[]) =>
  StoryScene | undefined = (allStoryScenes, path) => {
    return find(Object.values(allStoryScenes),
        (scene: StoryScene) => {
          if (scene.backendPath.length <= 1) {
            return false;
          }
          return isEqual(scene.backendPath.slice(
              0, scene.backendPath.length - 1), path);
        });
  };

export const wakeUpServer = async (setServerReady: (b: boolean) => void) => {
  try {
    // make the API call
    console.log('pinging server to wake it up...');
    const ping = await fetchContinueConversationData(
        {
          context: {
            username: 'SAMPLE',
            stores: undefined,
          },
          action: sampleAction,
        });
    if (ping.type === 'continuation-data') {
      console.log('server is awake :) ');
      setServerReady(true);
    } else {
      console.log('Wake up server call failed, got an error! '+
    'This may lead to an error.');
    }
  } catch {
    console.log('Wake up server call failed! '+
    'This may lead to an error.');
  }
};


export const handleAction: (
    option: OptionData,
    currentPage: PageData,
    setCurrentPage: SetterOrUpdater<PageData>,
    username: string,
    allStoryScenes: Record<SceneUUID, StoryScene>,
    completedScenes: Set<SceneUUID>,
    setCompletedScenes: (c: Set<SceneUUID>) => void,
    setSceneFeedbackDialog: (c: SceneFeedbackDialog | undefined) => void,
) => Promise<void> = async (optionData, currentPage,
    setCurrentPage, username, allStoryScenes, completedScenes,
    setCompletedScenes, setSceneFeedbackDialog) => {
  switch (optionData.action.type) {
    case 'click-option': {
      // TODO: update to real implementation

      try {
        // make the API call
        const updates = await fetchContinueConversationData(
            {
              context: {
                username: 'SAMPLE',
                stores: currentPage.currentStores,
              },
              action: optionData.action,
            });
        if (updates.type === 'continuation-data') {
          console.log(updates);
          const newPage = appendToPage(currentPage,
              optionData,
              updates.cards, updates.options, updates.context);
          setCurrentPage(newPage);
          uploadPageToFB(newPage, username);
          // Check if we have completed a scene.
          const currentScenePath = currentPage.currentStores !== undefined ?
          currentPage.currentStores
              .currentConvoSegmentPath.parentModules : ['root'];
          const newScenePath = newPage.currentStores !== undefined ?
          newPage.currentStores
              .currentConvoSegmentPath.parentModules : ['root'];
          if (currentScenePath !== newScenePath) {
            const currentScene = findSceneWithPath(
                allStoryScenes, currentScenePath);
            const nextScene = findSceneWithPath(
                allStoryScenes, newScenePath);
            if (currentScene !== undefined && nextScene !== undefined) {
              // User has successfully completed the current scene.
              if (currentScene.children.includes(nextScene.id) ||
                currentScene.parents.includes(nextScene.id) ||
                nextScene.parents.includes(currentScene.id)) {
                const firstTime = !completedScenes.has(currentScene.id);
                const updatedCompletedScenes = completedScenes.add(
                    currentScene.id);
                setCompletedScenes(updatedCompletedScenes);
                updateCompletedScenes(updatedCompletedScenes,
                    username);
                console.log('updated visited scenes');
                if (firstTime) {
                  setSceneFeedbackDialog({
                    scene: currentScene,
                  });
                }
              } else {
                console.log('new scene is not a child '+
                'of current scene, not updated visited scenes');
              }
            }
          }
        } else {
          console.log(
              `Server error getting conversation ` +
              `continuation data ${updates.body}`);
        }
      } catch (error) {
        console.log(`Client error getting conversation continuation data.`);
      }
    }
  }
};
