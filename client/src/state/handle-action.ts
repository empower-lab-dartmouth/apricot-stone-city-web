import {SetterOrUpdater} from 'recoil';
import {PageData} from '../components/page/page-model';
import {CardData} from '../components/card/card-model';
import {OptionData} from '../components/option/option-model';
import {fetchContinueConversationData} from '../utils/data-utils';
import {Stores} from '../utils/stores';
import {doc, setDoc} from 'firebase/firestore';
import {db} from '../components/firebase/firebase-config';

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


export const handleAction: (
    option: OptionData,
    currentPage: PageData,
    setCurrentPage: SetterOrUpdater<PageData>,
    username: string,
) => Promise<void> = async (optionData, currentPage,
    setCurrentPage, username) => {
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
