import {SxProps} from '@mui/material';
import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import BuildIcon from '@mui/icons-material/Build';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LinkIcon from '@mui/icons-material/Link';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import Edit from '@mui/icons-material/Edit';
import Code from '@mui/icons-material/Code';
import GridView from '@mui/icons-material/GridView';
import {ArrowBack} from '@mui/icons-material';
import SquareIcon from '@mui/icons-material/Square';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';


export type IconName = 'delete'
    | 'speed-dial'
    | 'add-circle-outline'
    | 'remove-circle-outline'
    | 'settings'
    | 'cloud-download'
    | 'build'
    | 'visibility'
    | 'visibility-off'
    | 'more-vert'
    | 'add'
    | 'arrow-back'
    | 'radio-button-unchecked'
    | 'radio-button-checked'
    | 'link'
    | 'edit'
    | 'code'
    | 'square'
    | 'lock-open'
    | 'lock'
    | 'grid-view';

export type IconProps = {
    iconName: IconName
    sx?: SxProps
};


const Icon: React.FC<IconProps> = ({iconName, sx}) => {
  switch (iconName) {
    case 'delete': {
      return <DeleteIcon sx={sx} />;
    }
    case 'lock': {
      return <LockIcon sx={sx} />;
    }
    case 'lock-open': {
      return <LockOpenIcon sx={sx} />;
    }
    case 'add': {
      return <AddIcon sx={sx} />;
    }
    case 'square': {
      return <SquareIcon sx={sx} />;
    }
    case 'link': {
      return <LinkIcon sx={sx} />;
    }
    case 'radio-button-unchecked': {
      return <RadioButtonUncheckedIcon sx={sx} />;
    }
    case 'radio-button-checked': {
      return <RadioButtonCheckedIcon sx={sx} />;
    }
    case 'add-circle-outline': {
      return <AddCircleOutlineIcon sx={sx} />;
    }
    case 'remove-circle-outline': {
      return <RemoveCircleOutlineIcon sx={sx} />;
    }
    case 'settings': {
      return <SettingsIcon sx={sx} />;
    }
    case 'cloud-download': {
      return <CloudDownloadIcon sx={sx} />;
    }
    case 'build': {
      return <BuildIcon sx={sx} />;
    }
    case 'visibility': {
      return <VisibilityIcon sx={sx} />;
    }
    case 'visibility-off': {
      return <VisibilityOffIcon sx={sx} />;
    }
    case 'more-vert': {
      return <MoreVertIcon sx={sx} />;
    }
    case 'arrow-back': {
      return <ArrowBack sx={sx} />;
    }
    case 'edit': {
      return <Edit sx={sx} />;
    }
    case 'code': {
      return <Code sx={sx} />;
    }
    case 'grid-view': {
      return <GridView sx={sx} />;
    }
    default: {
      return <></>;
    }
  }
};

export default Icon;
