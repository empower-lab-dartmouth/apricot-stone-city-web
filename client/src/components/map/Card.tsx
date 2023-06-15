/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, {FC, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {useRecoilValue} from 'recoil';
import {userContextState} from './graph-recoil';
import metalTex from '../../assets/metal-tex.webp';
import {allScenesState} from '../../state/recoil';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {Autocomplete, Box,
  TextField, Typography} from '@mui/material';
import {allQuests} from '../../state/recoil';


const imgNotFound = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',

  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const inputFieldStyles = {
  width: '100%',
  paddingBottom: '10px',
};

const CreateNewStorySceneForm: FC = () => {
  const [image, setImage] = useState<string>(imgNotFound);
  const allStoryScenes = useRecoilValue(allScenesState);
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
    <Box sx={style}>
      <Typography variant="h6" component="h2">
            Create or edit a story scene
      </Typography>
      <Typography sx={{mt: 2}}>
            Please provide summary information below about
             the scene you are editing.
      </Typography>
      <br />
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CreateNewStorySceneForm />
      </Modal>
    </Card>
  );
}
