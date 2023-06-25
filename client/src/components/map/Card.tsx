/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, {FC, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {atom, useRecoilState, useRecoilValue} from 'recoil';
import {userContextState} from './graph-recoil';
import metalTex from '../../assets/metal-tex.webp';
import {EditHistory, allScenesState,
  currentPageState} from '../../state/recoil';
import Button from '@mui/material/Button';
import {Autocomplete, Box,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  TextField, Typography} from '@mui/material';
import {allQuests} from '../../state/recoil';
import {NavLink} from 'react-router-dom';
import {ConvoSegmentId, ModulePath, Stores} from '../../utils/stores';
import {handleAction} from '../../state/handle-action';


const imgNotFound = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';

const inputFieldStyles = {
  width: '100%',
  paddingBottom: '10px',
};

type CreateOrEditFormStartingState = {
  isNewScene: boolean,
  title: string,
  id: string,
  quests: string[],
  children: string[],
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
  children: [],
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

const CreateOrEditStorySceneForm: FC = () => {
  const allStoryScenes = useRecoilValue(allScenesState);
  const possiblyUndefined = useRecoilValue(createOrEditFormSceneStartingState);
  const startingFormState = possiblyUndefined === undefined ?
    defaultVal : possiblyUndefined;
  const [sceneTitle, setSceneTitle] = useState<string>(startingFormState.title);
  const [summary, setSummary] = useState<string>(startingFormState.summary);
  const [quests, setQuests] = useState<string[]>(startingFormState.quests);
  const [children, setChildren] = useState<string[]>(
      startingFormState.children);
  const [parents, setParents] = useState<string[]>(
      startingFormState.parents);
  const [imgUrl, setImgUrl] = useState<string>(
      startingFormState.imgUrl);
  const [wikiUrl, setWikiUrl] = useState<string>(
      startingFormState.wikiUrl);
  const [backendPath, setBackendPath] = useState<string[]>(
      startingFormState.backendPath);

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
      if (status == 200) {
        console.log('imageLoads!');
        setImgUrl(url);
      } else {
        console.log('image does not load');
        setImgUrl(imgNotFound);
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
      <Typography color="gray" sx={{mt: 2}}>
            Last updated by: <i>username</i>
      </Typography>
      <TextField style={inputFieldStyles}
        id="scene-title"
        value={sceneTitle}
        onChange={(e) => setSceneTitle(e.target.value)}
        label="Scene title (must be unique)" variant="outlined" />
      <Autocomplete
        multiple
        sx={inputFieldStyles}
        value={parents.map((p) => ({
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
      <Autocomplete
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
      />
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
      <Button
        variant="contained">Save changes</Button>
      <h4>To disregard changes, click outside this pop-up.</h4>
      <h4>After saving a change, refresh the page to see your updates.</h4>
    </Box>
  );
};

export default function BasicCard() {
  const context = useRecoilValue(userContextState);
  const allStoryEvents = useRecoilValue(allScenesState);
  const selectedScene = allStoryEvents[context.selectedStorySceneID];
  const [formInit, setFormInit] = useRecoilState(
      createOrEditFormSceneStartingState);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);

  const [open, setOpen] = React.useState(false);
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
      id: ((new Date).getMilliseconds.toString()),
      title: '',
      summary: '',
      quests: [],
      parents: [selectedScene.id],
      children: [],
      imgUrl: imgNotFound,
      editHistory: [],
      wikiUrl: 'Create a new Google Doc and update this value with that url',
      backendPath: ['NOT_YET_IMPLEMENTED'],
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
    const stores: Stores = {
      ...(currentPage.currentStores as any as Stores),
      currentConvoSegmentPath: {
        id: selectedScene.backendPath[
            selectedScene.backendPath.length - 1] as ConvoSegmentId,
        parentModules: selectedScene.backendPath.slice(0, -1) as ModulePath,
      },
    };
    setCurrentPage({
      ...currentPage,
      currentStores: stores});
    handleAction({
      action: {
        type: 'click-option',
        option: 'Returning to a scene!',
      },
      id: 'free-response',
      text: 'Returning to a scene!',
      type: 'option'}, {
      ...currentPage,
      currentStores: stores}, setCurrentPage);
  };

  return (
    <Card sx={{paddingTop: '150px', paddingLeft: '40px',
      paddingRight: '40px', backgroundImage: `url(${metalTex})`}}>
      <CardContent sx={{backgroundColor: 'white',
        border: '5px solid #46c6ea',
        borderRadius: '7px'}}>
        <h2>{context.selectedStorySceneID}</h2>
        <img alt="preview image" width="200"
          src={selectedScene.imgUrl}/>
        <p>{selectedScene.summary}</p>
        <p>{selectedScene.parents.length !== 0 ?
        'parents:' : 'no parents'}</p>
        {
          selectedScene.parents.map((p) =>
            <Chip label={allStoryEvents[p].title} sx={{
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
        <p>{selectedScene.children.length !== 0 ?
        'children:' : 'no children'}</p>
        {
          selectedScene.parents.map((p) =>
            <Chip label={allStoryEvents[p].title} sx={{
              'height': 'auto',
              '& .MuiChip-label': {
                borderRadius: '25px',
                whiteSpace: 'normal',
                backgroundColor: 'lightBlue',
                color: 'black',
              },
            }}
            key={p}
            />,
          )
        }
        <br />
        <br />
        <NavLink to="/adventure" className="nav-item">
          <Button onClick={returnToScene}
            variant="contained" color='success'>Return to this scene</Button>
        </NavLink>
        <br />
        {
          !selectedScene.wikiUrl.includes('docs.google.com') ?
          <p>Wiki not yet implemented.</p> :
          // eslint-disable-next-line react/jsx-no-target-blank
          <a target="_blank" href={selectedScene.wikiUrl}><p>Wiki link</p></a>
        }
        {
          selectedScene.backendPath.length === 0 ?
          <p>Backend not yet implemented.</p> :
          <>
            <p>backend path:</p>
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
      </CardContent>
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
    </Card>
  );
}
