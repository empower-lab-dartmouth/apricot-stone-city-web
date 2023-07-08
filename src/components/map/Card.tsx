/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, {FC, useContext, useState} from 'react';
import {db} from '../firebase/firebase-config';
import {doc, setDoc} from 'firebase/firestore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {atom, useRecoilState, useRecoilValue} from 'recoil';
import {defaultUserContext, userContextState} from './graph-recoil';
import metalTex from '../../assets/metal-tex.webp';
import checkmark from '../../assets/check-mark.png';
import actionIcon from '../../assets/action-icon.png';
import {EditHistory, StoryScene, allScenesState,
  competedScenesState,
  convoResponseErrorState,
  currentPageState,
  sceneFeedbackDialogState,
  useServerUrlState,
  userLevelState} from '../../state/recoil';
import Button from '@mui/material/Button';
// import CloseIcon from '@mui/icons-material/Close';
import {Autocomplete, Box,
  Chip,
  // Collapse,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  Stack,
  Switch,
  TextField, Typography} from '@mui/material';
import {allQuests} from '../../state/recoil';
import {NavLink} from 'react-router-dom';
import {ConvoSegmentId, ConvoSegmentPath,
  ModulePath, Stores} from '../../utils/stores';
import {handleAction,
  uploadReturnToSceneEventToFB} from '../../state/handle-action';
import {AuthContext} from '../../context/auth-context';
import Alert from '@mui/material/Alert';
import {isEqual} from 'lodash';
// import IconButton from '@mui/material/IconButton';


const imgNotFound = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';
const signpostImgUrl = 'https://1.bp.blogspot.com/-SZH-Z1gknUY/YQBYZZgY3DI/AAAAAAAAqv8/QvQ7ZufrvLQfHs-2wldq7z01TNXMp4y9ACNcBGAsYHQ/s16000/Sign.png';

const inputFieldStyles = {
  width: '100%',
  paddingBottom: '10px',
};

type CreateOrEditFormStartingState = {
  isNewScene: boolean,
  title: string,
  id: string,
  quests: string[],
  parents: string[],
  summary: string,
  imgUrl: string,
  wikiUrl: string,
  backendPath: string[],
  editHistory: EditHistory[]
}

// Just for typechecking
const defaultVal: CreateOrEditFormStartingState = {
  isNewScene: true,
  title: '',
  id: '',
  quests: [],
  parents: [],
  summary: '',
  imgUrl: '',
  wikiUrl: '',
  backendPath: [],
  editHistory: [],
};

const createOrEditFormSceneStartingState = atom<CreateOrEditFormStartingState
| undefined>({
  key: 'CreateOrEditFormStartingState',
  default: undefined,
});

const createOrEditFormOpen = atom<boolean>({
  key: 'createOrEditFormOpen',
  default: false,
});


const updateFB = async (updatedStoryScene: StoryScene,
    priorScene: StoryScene) => {
  // do firebase stuff to write
  console.log('submitting');
  try {
    await setDoc(
        doc(db, 'StoryScene', updatedStoryScene.id), updatedStoryScene);
    await setDoc(
        doc(db, 'UpdateHistory', Date.now().toString()), updatedStoryScene);
    console.log('Document written to fb');
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

const CreateOrEditStorySceneForm: FC = () => {
  const [allStoryScenes, setAllScenes] = useRecoilState(allScenesState);
  const possiblyUndefined = useRecoilValue(createOrEditFormSceneStartingState);
  const startingFormState = possiblyUndefined === undefined ?
    defaultVal : possiblyUndefined;
  const {currentUser} = useContext(AuthContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [formInit, setFormInit] = useRecoilState(
      createOrEditFormSceneStartingState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [open, setOpen] = useRecoilState(createOrEditFormOpen);
  const [sceneTitle, setSceneTitle] = useState<string>(startingFormState.title);
  const [summary, setSummary] = useState<string>(startingFormState.summary);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [context, setContext] = useRecoilState(userContextState);
  const [quests, setQuests] = useState<string[]>(startingFormState.quests);
  // const [children, setChildren] = useState<string[]>(
  //     startingFormState.children);
  const [parents, setParents] = useState<string[]>(
      startingFormState.parents);
  const [imgUrl, setImgUrl] = useState<string>(
      startingFormState.imgUrl);
  const [wikiUrl, setWikiUrl] = useState<string>(
      startingFormState.wikiUrl);
  const [backendPath, setBackendPath] = useState<string[]>(
      startingFormState.backendPath);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [imgUrlWorks, setImgUrlWorks] = useState<boolean>(true);


  const submitForm = (deleted?: boolean) => {
    const update: StoryScene = {
      title: sceneTitle,
      id: startingFormState.id,
      quests: quests,
      parents: parents,
      summary: summary,
      deleted: deleted === undefined ? false : deleted,
      imgUrl: imgUrl,
      wikiUrl: wikiUrl,
      backendPath: backendPath,
      editHistory: [{
        username: (currentUser?.email) as any as string,
        date: Date(),
      },
      ...startingFormState.editHistory],
    };
    const priorScene: StoryScene = {
      title: startingFormState.title,
      id: startingFormState.id,
      quests: startingFormState.quests,
      parents: startingFormState.parents,
      summary: startingFormState.summary,
      deleted: false,
      imgUrl: startingFormState.imgUrl,
      wikiUrl: startingFormState.wikiUrl,
      backendPath: startingFormState.backendPath,
      editHistory: startingFormState.editHistory,
    };

    updateFB(update, priorScene);
    if (deleted === undefined) {
      setAllScenes({
        ...allStoryScenes,
        [startingFormState.id]: update,
      });
    } else {
      // eslint-disable-next-line no-unused-vars
      const {[startingFormState.id]: _, ...remaining} = allStoryScenes;
      setAllScenes(remaining);
    }
  };

  const questsWithAutocompleteFormatting = Object
      .values(allQuests)
      .map((q) => ({
        item: q.id,
        label: q.title,
      }));

  const checkImage: (url: string) => void = (url) => {
    // eslint-disable-next-line no-var
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.send();
    request.onload = function() {
      const status = request.status;
      if (status == 200 && url !== imgNotFound) {
        console.log('imageLoads!');
        setImgUrlWorks(true);
      } else {
        console.log('image does not load');
        setImgUrlWorks(false);
      }
    };
  };
  const storyScenesWithAutocompleteFormatting = Object
      .values(allStoryScenes)
      .map((s) => ({
        item: s.id,
        label: s.title,
        group: 'group 1',
      }));

  return (
    <Box>
      <Typography sx={{mt: 2}}>
            Please provide summary information below about
             the scene you are editing.
      </Typography>
      {
        startingFormState.editHistory.length > 0 ?
        <Typography color="gray" sx={{mt: 2}}>
            Last updated by:
          <i>{startingFormState.editHistory[0].username}</i>,
          {startingFormState.editHistory[0].date}
        </Typography> :
      <></>
      }

      <TextField style={inputFieldStyles}
        id="scene-title"
        value={sceneTitle}
        onChange={(e) => setSceneTitle(e.target.value)}
        label="Scene title (must be unique)" variant="outlined" />
      <Autocomplete
        multiple
        sx={inputFieldStyles}
        value={parents
            .filter((p) => allStoryScenes[p] !== undefined &&
          !allStoryScenes[p].deleted)
            .map((p) => ({
              item: p,
              label: allStoryScenes[p].title,
            }))}
        onChange={(_event, val, _reason, _details) => setParents(
            val.map((p) => p.item))}
        // value={.value}
        // onChange={(_event, val, _reason, _details) => props.onChange(val)}
        disableListWrap
        getOptionLabel={(option) => option.label}
        // PopperComponent={StyledPopper}
        // ListboxComponent={ListboxComponent}
        options={storyScenesWithAutocompleteFormatting}
        isOptionEqualToValue={(option, value) => option.item === value.item}
        renderInput={(params) => <TextField {...params}
          label={'Parent scene(s)'} />}
        // renderOption={renderOption}
        // renderGroup={(params) => params}
      />
      {/* <Autocomplete
        multiple
        sx={inputFieldStyles}
        value={children.map((c) => ({
          item: c,
          label: allStoryScenes[c].title,
        }))}
        onChange={(_event, val, _reason, _details) => setChildren(
            val.map((c) => c.item))}
        // value={.value}
        // onChange={(_event, val, _reason, _details) => props.onChange(val)}
        disableListWrap
        getOptionLabel={(option) => option.label}
        // PopperComponent={StyledPopper}
        // ListboxComponent={ListboxComponent}
        options={storyScenesWithAutocompleteFormatting}
        isOptionEqualToValue={(option, value) => option.item === value.item}
        // groupBy={(option) => option.group}
        renderInput={(params) => <TextField {...params}
          label={'Child scene(s)'} />}
        // renderOption={renderOption}
        // renderGroup={(params) => params}
      /> */}
      <Autocomplete
        multiple
        sx={inputFieldStyles}
        value={quests.map((q) => ({
          item: q,
          label: allQuests[q].title,
        }))}
        onChange={(_event, val, _reason, _details) => setQuests(
            val.map((v) => v.item))}
        disableListWrap
        getOptionLabel={(option) => option.label}
        // PopperComponent={StyledPopper}
        // ListboxComponent={ListboxComponent}
        options={questsWithAutocompleteFormatting}
        isOptionEqualToValue={(option, value) => option.item === value.item}
        renderInput={(params) => <TextField {...params}
          label={'Quest(s) fulfilled'} />}
        // renderOption={renderOption}
        // renderGroup={(params) => params}
      />
      <TextField
        id="scene-description"
        style={inputFieldStyles}
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        label="Brief summary of key story events in this scene"
        multiline
      />
      <TextField
        id="scene-description"
        style={inputFieldStyles}
        label="image url (must be publicly available)"
        value={imgUrl}
        onChange={(e) => {
          const v = e.target.value;
          if (v !== null) {
            setImgUrl(v);
            checkImage(v);
          }
        }}
      />
      <img alt="preview image" height="50"
        src={imgUrl}/>
      <br />
      <TextField style={inputFieldStyles}
        id="scene-wiki-url"
        value={wikiUrl}
        onChange={(e) => setWikiUrl(e.target.value)}
        label="Public Wiki url (Google Doc url)" variant="outlined" />
      <Typography sx={{mt: 2}}>
        Absolute path for the backend node, list MUST be separated by spaces
      </Typography>
      <TextField style={inputFieldStyles}
        id="backend-path"
        value={backendPath.join(' ')}
        onChange={(e) => setBackendPath(e.target.value.split(' '))}
        // eslint-disable-next-line max-len
        label="For example: root having-dinner arrive-to-the-house"
        variant="outlined" />
      {
          !imgUrlWorks ?
      <Alert variant="filled" severity="error">
        Image url must be valid, please fix.
      </Alert> : <></>
      }
      <Button
        disabled={
          !imgUrlWorks
        }
        variant="contained" onClick={() => {
          submitForm();
          setOpen(false);
          setFormInit(undefined);
        }}>Save changes</Button>
      <h4>To disregard changes, click outside this pop-up.</h4>
      <h4>After saving a change, refresh the page to see your updates.</h4>
      {
        !startingFormState.isNewScene ?
      <Button
        disabled={
          startingFormState.id === 'root'
        }
        color='error'
        variant="contained" onClick={() => {
          submitForm(true);
          setOpen(false);
          setFormInit(undefined);
          setContext(defaultUserContext);
        }}>Delete Scene</Button> :
        <></>
      }
    </Box>
  );
};


const hasPermissions: (completedScenes: Set<string>,
  selectedScene: StoryScene,
  userLevel: number,
  username: string) => boolean = (completedScenes,
      selectedScene, userLevel, username) =>
    completedScenes.has(selectedScene.id) ||
    userLevel >= 1 ||
    selectedScene.editHistory.map((v) => v.username).includes(username);

export default function BasicCard() {
  const [context, setContext] = useRecoilState(userContextState);
  const [editHistoryHidden, setEditHistoryHidden] = useState(false);
  const allStoryEvents = useRecoilValue(allScenesState);
  const userLevel = useRecoilValue(userLevelState);
  const selectedScene = allStoryEvents[context.selectedStorySceneID];
  const server = useRecoilValue(useServerUrlState);
  const [formInit, setFormInit] = useRecoilState(
      createOrEditFormSceneStartingState);
  const [completedScenes, setCompletedScenes] = useRecoilState(
      competedScenesState);
  const {currentUser} = React.useContext(AuthContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [convoError, setConvoError] = useRecoilState(convoResponseErrorState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [sceneFeedbackDialog, setFeedbackDialog] = useRecoilState(
      sceneFeedbackDialogState);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);

  const [open, setOpen] = useRecoilState(createOrEditFormOpen);
  const handleOpenEdit = () => {
    setFormInit({
      isNewScene: false,
      ...selectedScene,
    });
    setOpen(true);
  };
  const handleOpenCreateNew = () => {
    setFormInit({
      isNewScene: true,
      id: Date.now().toString(),
      title: '',
      summary: '',
      quests: [],
      parents: [selectedScene.id],
      imgUrl: signpostImgUrl,
      editHistory: [],
      wikiUrl: 'Create a new Google Doc and update this value with that url',
      backendPath: [],
    });
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setFormInit(undefined);
  };
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const {current: descriptionElement} = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const returnToScene = () => {
    if (selectedScene.backendPath.length < 2) {
      return;
    }
    const newPath: Required<ConvoSegmentPath> = {
      id: selectedScene.backendPath[
          selectedScene.backendPath.length - 1] as ConvoSegmentId,
      parentModules: selectedScene.backendPath.slice(0, -1) as ModulePath,
    };
    const stores: Stores = {
      ...(currentPage.currentStores as any as Stores),
      currentConvoSegmentPath: {
        id: selectedScene.backendPath[
            selectedScene.backendPath.length - 1] as ConvoSegmentId,
        parentModules: selectedScene.backendPath.slice(0, -1) as ModulePath,
      },
    };
    const currentPath = currentPage.currentStores === undefined ? newPath :
    currentPage.currentStores.currentConvoSegmentPath;
    uploadReturnToSceneEventToFB(currentPath, newPath,
      currentUser?.email as string, server);
    setCurrentPage({
      ...currentPage,
      currentStores: stores});
    handleAction({
      action: {
        type: 'click-option',
        option: 'Returning to a scene!',
      },
      correctAnswer: 'na',
      id: 'free-response',
      text: 'Returning to a scene!',
      type: 'option'}, {
      ...currentPage,
      currentStores: stores}, setCurrentPage,
      currentUser?.email as string, allStoryEvents,
      completedScenes, setCompletedScenes,
      setFeedbackDialog, server, setConvoError);
  };

  const children = Object.values(allStoryEvents)
      .filter((s) => s.parents.includes(selectedScene.id) && !s.deleted);

  return (
    <Card sx={{paddingTop: '150px', paddingLeft: '40px',
      paddingRight: '40px', backgroundImage: `url(${metalTex})`,
      width: '30%'}}>
      <CardContent sx={{backgroundColor: 'white',
        border: '5px solid #46c6ea',
        borderRadius: '7px'}}>
        {
            completedScenes.has(selectedScene.id) ?
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              <h2>{selectedScene.title}</h2>
              <div style={{backgroundColor: 'lightgreen',
                borderRadius: '20px'}}>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={0}
                >
                  <img alt="preview image" width="20"
                    src={checkmark}/>
                  <p style={{color: 'green',
                    paddingRight: '3px'}}>Completed!</p>
                </Stack>
              </div>
              {
                selectedScene.backendPath.length > 1 &&
                currentPage.currentStores !== undefined &&
                currentPage.currentStores
                    .currentConvoSegmentPath.parentModules.length >= 1 &&
                isEqual(selectedScene.backendPath.slice(
                    0, selectedScene.backendPath.length - 1),
                currentPage.currentStores?.currentConvoSegmentPath
                    .parentModules) ?
                <div style={{backgroundColor: 'lightyellow',
                  borderRadius: '20px'}}>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={0}
                  >
                    <img alt="preview image" width="20"
                      src={actionIcon}/>
                    <p style={{color: 'darkblue',
                      paddingRight: '3px'}}>In progress!</p>
                  </Stack>
                </div> : <></>
              }
            </Stack> : <h2>{selectedScene.title}</h2>
        }
        <img alt="preview image" width="200"
          src={selectedScene.imgUrl}/>
        {
            hasPermissions(completedScenes, selectedScene, userLevel,
              currentUser?.email as string) ?
              <>
                <p style={{color: 'gray'}}>Summary:</p>
                <p>{selectedScene.summary}</p>
              </> :

            <>
              <br />
              <Alert variant="filled" severity="info">
              Scene info will be unlocked <br />
              once you complete
                this scene in <br />
                adventure mode.
              </Alert>
            </>
        }
        <p style={{color: 'gray'}}>{
        selectedScene.quests.length !== 0 ?
        'Quests fulfilled:' : 'Fulfils no quests.'}</p>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={1}
        >
          {
            selectedScene.quests.map((p) => (
              <>
                <img src={allQuests[p].img} style={{width: '62px'}}/>
                <Chip label={allQuests[p].title} sx={{
                  'height': 'auto',
                  '& .MuiChip-label': {
                    borderRadius: '25px',
                    whiteSpace: 'normal',
                    backgroundColor: 'lightGreen',
                    color: 'black',
                  },
                }}
                key={p}/>
              </>
            ))
          }
        </Stack>
        <p style={{color: 'gray'}}>{selectedScene.parents.length !== 0 ?
        'Parents:' : 'No parents.'}</p>
        {
          selectedScene.parents
              .filter((p) => allStoryEvents[p] !== undefined &&
          !allStoryEvents[p].deleted)
              .map((p) =>
                <Chip onClick={(e) => {
                  setContext({
                    ...context,
                    selectedStorySceneID: p,
                  });
                }} label={allStoryEvents[p].title} sx={{
                  'height': 'auto',
                  '& .MuiChip-label': {
                    borderRadius: '25px',
                    whiteSpace: 'normal',
                    backgroundColor: '#ffb800',
                    color: 'black',
                  },
                }}
                key={p}
                />,
              )
        }
        <p style={{color: 'gray'}}>{children.length !== 0 ?
        'Children:' : 'No children.'}</p>
        {
          children.map((p) =>
            <Chip onClick={(e) => {
              setContext({
                ...context,
                selectedStorySceneID: p.id,
              });
            }} label={p.title} sx={{
              'height': 'auto',
              '& .MuiChip-label': {
                borderRadius: '25px',
                whiteSpace: 'normal',
                backgroundColor: 'lightBlue',
                color: 'black',
              },
            }}
            key={p.id}
            />,
          )
        }
        {
         hasPermissions(completedScenes, selectedScene, userLevel,
          currentUser?.email as string) ?
         <>
           {
          selectedScene.backendPath.length <= 1 ? <></> :
          <>
            <br />
            <br />
            <NavLink to="/adventure" className="nav-item">
              <Button onClick={returnToScene}
                variant="contained" color='success'>
                  Return to this scene</Button>
            </NavLink>
            <br />
          </>
           }
           {
          !selectedScene.wikiUrl.includes('docs.google.com') ?
          <p style={{color: 'gray'}}>Wiki not yet implemented.</p> :
          // eslint-disable-next-line react/jsx-no-target-blank
          <a target="_blank" href={selectedScene.wikiUrl}><p>Wiki link</p></a>
           }
           {
          selectedScene.backendPath.length <= 1 ?
          <p style={{color: 'gray'}}>Backend not yet implemented.</p> :
          <>
            <p style={{color: 'gray'}}>Backend path:</p>
            <Stack direction="column" spacing={0}>
              {
                selectedScene.backendPath.map((p) =>
                  <Chip label={p} sx={{
                    'height': 'auto',
                    '& .MuiChip-label': {
                      borderRadius: '25px',
                      whiteSpace: 'normal',
                      backgroundColor: 'white',
                      border: 'black',
                      borderStyle: 'solid',
                      borderWidth: '3px',
                      color: 'black',
                    },
                  }}
                  key={p}
                  />,
                )
              }
            </Stack>
            <br />
          </>
           }
           <Button onClick={handleOpenEdit}
             variant="contained">Edit this scene</Button>
           <br />
           <br />
           <Button onClick={handleOpenCreateNew}
             variant="contained">Create new scene <br />
          (as a child of this scene)</Button>
         </> : <></>
        }
        <FormGroup>
          <FormControlLabel control={<Switch value={editHistoryHidden} onClick=
            {() => setEditHistoryHidden(!editHistoryHidden)}/>}
          label="Edit history visible" />
        </FormGroup>
        {
          editHistoryHidden ?
        <p>Edit history:
          {
            selectedScene.editHistory
                .map((h) => `${h.username}, ${h.date}`).map(
                    (v) =>
                      <p key={v}>{v}<br /></p>)
          }
        </p> :
        <></>
        }
      </CardContent>
      {
      hasPermissions(completedScenes, selectedScene, userLevel,
        currentUser?.email as string) ?
         <>
           <Dialog
             open={open}
             scroll={'body'}
             onClose={handleClose}
             aria-labelledby="modal-modal-title"
             aria-describedby="modal-modal-description"
           >
             <DialogTitle id="scroll-dialog-title">
               { formInit === undefined || formInit.isNewScene ?
          'Create a new story scene' :
          ' Edit story scene' } </DialogTitle>
             <DialogContent
               dividers>
               { formInit === undefined ? <></> :
          <CreateOrEditStorySceneForm />
               }
             </DialogContent>
           </Dialog>
         </> : <></>
      }
    </Card>
  );
}
