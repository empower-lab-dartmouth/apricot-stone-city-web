/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, {FC, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {atom, useRecoilValue} from 'recoil';
import {userContextState} from './graph-recoil';
import metalTex from '../../assets/metal-tex.webp';
import {Quest, allScenesState} from '../../state/recoil';
import Button from '@mui/material/Button';
import {Autocomplete, Box,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField, Typography} from '@mui/material';
import {allQuests} from '../../state/recoil';


const imgNotFound = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';

const inputFieldStyles = {
  width: '100%',
  paddingBottom: '10px',
};

type CreateOrEditFormStartingState = {
  isNewScene: boolean,
  title: string,
  id: string,
  quests: Quest[],
  children: string[],
  parents: string[],
  summary: string[],
  imgUrl: string,
  wikiUrl: string,
  backendPath: string,
}

const createOrEditFormSceneStartingState = atom<CreateOrEditFormStartingState
| undefined>({
  key: 'CreateOrEditFormStartingState',
  default: undefined,
});

const CreateOrEditStorySceneForm: FC = () => {
  const [image, setImage] = useState<string>(imgNotFound);
  const allStoryScenes = useRecoilValue(allScenesState);
  const useRecoilValue(createOrEditFormSceneStartingState);
  const [sceneTitle, setSceneTitle] = useState<string>();

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
        setImage(url);
      } else {
        console.log('image does not load');
        setImage(imgNotFound);
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
        label="Scene title (must be unique)" variant="outlined" />
      <Autocomplete
        multiple
        sx={inputFieldStyles}
        // value={.value}
        // onChange={(_event, val, _reason, _details) => props.onChange(val)}
        disableListWrap
        getOptionLabel={(option) => option.label}
        // PopperComponent={StyledPopper}
        // ListboxComponent={ListboxComponent}
        options={storyScenesWithAutocompleteFormatting}
        isOptionEqualToValue={(option, value) => option.item === value.item}
        groupBy={(option) => option.group}
        renderInput={(params) => <TextField {...params}
          label={'Parent scene(s)'} />}
        // renderOption={renderOption}
        // renderGroup={(params) => params}
      />
      <Autocomplete
        multiple
        sx={inputFieldStyles}
        // value={.value}
        // onChange={(_event, val, _reason, _details) => props.onChange(val)}
        disableListWrap
        getOptionLabel={(option) => option.label}
        // PopperComponent={StyledPopper}
        // ListboxComponent={ListboxComponent}
        options={storyScenesWithAutocompleteFormatting}
        isOptionEqualToValue={(option, value) => option.item === value.item}
        groupBy={(option) => option.group}
        renderInput={(params) => <TextField {...params}
          label={'Child scene(s)'} />}
        // renderOption={renderOption}
        // renderGroup={(params) => params}
      />
      <Autocomplete
        multiple
        sx={inputFieldStyles}
        // value={.value}
        // onChange={(_event, val, _reason, _details) => props.onChange(val)}
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
        label="Brief summary of key story events in this scene"
        multiline
      />
      <TextField
        id="scene-description"
        style={inputFieldStyles}
        label="image url (must be publicly available)"
        onChange={(e) => {
          const v = e.target.value;
          if (v !== null) {
            checkImage(v);
          }
        }}
      />
      <img alt="preview image" height="50"
        src={image}/>
      <br />
      <TextField style={inputFieldStyles}
        id="scene-wiki-url"
        label="Public Wiki url (Google Doc url)" variant="outlined" />
      <Typography sx={{mt: 2}}>
        Absolute path for backend node comma separated
      </Typography>
      <TextField style={inputFieldStyles}
        id="backend-path"
        // eslint-disable-next-line max-len
        label="For example: root,having-dinner,arrive-to-the-house"
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const {current: descriptionElement} = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <Card sx={{paddingTop: '150px', paddingLeft: '40px',
      paddingRight: '40px', backgroundImage: `url(${metalTex})`}}>
      <CardContent sx={{backgroundColor: 'white',
        border: '5px solid #46c6ea',
        borderRadius: '7px'}}>
        <h2>{context.selectedStorySceneID}</h2>
        <h2>{selectedScene.description}</h2>
        <h2>{selectedScene.parent !== null ?
        selectedScene.parent : 'no parent'}</h2>
        <Button onClick={handleOpen}
          variant="contained">Create new scene</Button>
      </CardContent>
      <Dialog
        open={open}
        scroll={'body'}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DialogTitle id="scroll-dialog-title">
          Create or edit a story scene</DialogTitle>
        <DialogContent
          dividers>
          <CreateOrEditStorySceneForm />
        </DialogContent>
      </Dialog>
    </Card>
  );
}
