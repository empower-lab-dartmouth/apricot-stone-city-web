/* eslint-disable react/jsx-key */
/* eslint-disable require-jsdoc */
/* eslint-disable no-debugger */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-prototype-builtins */
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete,
{
  AutocompleteRenderOptionState} from '@mui/material/Autocomplete';
import useMediaQuery from '@mui/material/useMediaQuery';
import ListSubheader from '@mui/material/ListSubheader';
import {useTheme} from '@mui/material/styles';
import {VariableSizeList, ListChildComponentProps} from 'react-window';
import Typography from '@mui/material/Typography';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import Avatar from '@mui/material/Avatar';
import {amber, blue, deepPurple} from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Checkbox from '@mui/material/Checkbox';
import Icon from './Icons';
import {AutocompletePickerItemType,
  AutocompletePickerItem,
  AutocompletePickerProps} from './Autocomplete-types';


const Placeholder = <></>;
const icon = <CheckBoxOutlineBlankIcon sx={{width: 25, height: 25}} />;
const checkedIcon = <CheckBoxIcon sx={{width: 25, height: 25}} />;

const LISTBOX_PADDING = 8; // px

function renderRow(props: ListChildComponentProps) {
  const {data, index, style} = props;
  const dataSet = data[index];
  const inlineStyle = {
    ...style,
    top: (style.top as number) + LISTBOX_PADDING,
  };

  if (dataSet.hasOwnProperty('group')) {
    return (
      <ListSubheader key={dataSet.key} component="div" style={inlineStyle}>
        {dataSet.group}
      </ListSubheader>
    );
  }

  return (
    <Typography component="li" {...dataSet[0]} noWrap style={inlineStyle}>
      {dataSet[1]}
    </Typography>
  );
}

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

function useResetCache(data: any) {
  const ref = React.useRef<VariableSizeList>(null);
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
}

// Adapter for react-window
const ListboxComponent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLElement>
>((props, ref) => {
  const {children, ...other} = props;
  const itemData: React.ReactChild[] = [];
  (children as React.ReactChild[]).forEach(
      (item: React.ReactChild & { children?: React.ReactChild[] }) => {
        itemData.push(item);
        itemData.push(...(item.children || []));
      },
  );

  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'), {
    noSsr: true,
  });
  const itemCount = itemData.length;
  const itemSize = smUp ? 36 : 48;

  const getChildSize = (child: React.ReactChild) => {
    if (child.hasOwnProperty('group')) {
      return 48;
    }

    return itemSize;
  };

  const getHeight = () => {
    if (itemCount > 8) {
      return 8 * itemSize;
    }
    return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
  };

  const gridRef = useResetCache(itemCount);

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          itemData={itemData}
          height={getHeight() + 2 * LISTBOX_PADDING}
          width="100%"
          ref={gridRef}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={(index) => getChildSize(itemData[index])}
          overscanCount={5}
          itemCount={itemCount}
        >
          {renderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  );
});

// const StyledPopper = styled(Popper)({
//   [`& .${autocompleteClasses.listbox}`]: {
//     'boxSizing': 'border-box',
//     '& ul': {
//       padding: 0,
//       margin: 0,
//     },
//   },
// });

export const avatarPicker = (type: AutocompletePickerItemType) => {
  switch (type) {
    case 'component': {
      return (
        <Avatar sx={{
          bgcolor: amber[500], marginRight: 1, width: 25, height: 25,
        }}
        >
          <Icon iconName="square" sx={{width: 15, height: 15}} />
        </Avatar>
      );
    }
    case 'workspace': {
      return (
        <Avatar sx={{
          bgcolor: deepPurple[500], marginRight: 1, width: 25, height: 25,
        }}
        >
          <Icon iconName="square" sx={{width: 15, height: 15}} />
        </Avatar>
      );
    }
    case 'portal': {
      return (
        <Avatar sx={{
          bgcolor: blue[500], marginRight: 1, width: 25, height: 25,
        }}
        >
          <Icon iconName="grid-view" sx={{width: 15, height: 15}} />
        </Avatar>
      );
    }
    default: {
      return Placeholder;
    }
  }
};

const renderOption: (
  props: React.HTMLAttributes<HTMLLIElement>,
  option: AutocompletePickerItem,
  state: AutocompleteRenderOptionState,
) => React.ReactNode = (props, option, {inputValue}) => {
  const matches = match(option.label, inputValue);
  const parts = parse(option.label, matches);
  return <>[props,
    <Stack direction="row" spacing={0}>
      {avatarPicker(option.type)}
      {
        parts.map((part, index) => (
          <span
          // eslint-disable-next-line react/no-array-index-key
            key={`part.text${index}`}
            style={{
              fontWeight: part.highlight ? 700 : 400,
            }}
          >
            {part.text}
          </span>
        ))
      }
    </Stack>]
  </>;
};

const optionIsUsed: (usedValues: AutocompletePickerItem[] | undefined) => (
  option: AutocompletePickerItem) => boolean = (
      usedValues,
  ) => (option) => usedValues !== undefined &&
  usedValues.map((o) => o.item).includes(option.item);

const checkboxRenderOption: (
  usedValues: AutocompletePickerItem[] | undefined) => (
  props: React.HTMLAttributes<HTMLLIElement>,
  option: AutocompletePickerItem,
  state: AutocompleteRenderOptionState,
) => any = (usedValues) => (props, option, {inputValue}) => {
  const matches = match(option.label, inputValue);
  const parts = parse(option.label, matches);
  const selected = optionIsUsed(usedValues)(option);
  return (
    [{
      ...props,
      selected,
    },
    <Stack direction="row" spacing={0}>
      <Avatar sx={{
        backgroundColor: 'transparent', marginRight: 1, width: 35, height: 35,
      }}
      >
        <Checkbox
          icon={icon}
          checkedIcon={checkedIcon}
          style={{marginRight: 8}}
          checked={selected}
        />
      </Avatar>
      <span style={{margin: 'auto'}}>
        {
          parts.map((part, index) => (
            <span
              // eslint-disable-next-line react/no-array-index-key
              key={`part.text${index}`}
              style={{
                fontWeight: part.highlight ? 700 : 400,
              }}
            >
              {part.text}
            </span>
          ))
        }
      </span>
    </Stack>,
    ]
  );
};

const AutocompletePicker: React.FC<AutocompletePickerProps> = (props) => {
  debugger;
  if (props.type === 'single') {
    return (
      <Autocomplete
        sx={{width: 300}}
        value={props.value}
        // onChange={(_event, val, _reason, _details) => props.onChange(val)}
        disableListWrap
        getOptionLabel={(option) => option.label}
        // PopperComponent={StyledPopper}
        // ListboxComponent={ListboxComponent}
        options={props.options}
        isOptionEqualToValue={(option, value) => option.item === value.item}
        groupBy={(option) => option.group}
        renderInput={(params) => <TextField {...params} label={props.label} />}
        renderOption={renderOption}
        // renderGroup={(params) => params}
      />
    );
  }

  if (props.type === 'checkbox') {
    return (
      <Autocomplete
        multiple
        value={props.value}
        // onChange={(_event, val, _reason, _details) => props.onChange(val)}
        options={props.options}
        // groupBy={(option) => option.group}
        disableCloseOnSelect
        getOptionDisabled={optionIsUsed(props.value)}
        ListboxComponent={ListboxComponent}
        isOptionEqualToValue={(option, value) => option.item === value.item}
        getOptionLabel={(option) => option.label}
        // renderGroup={(params) => params}
        renderOption={checkboxRenderOption(props.value)}
        style={{width: 500}}
        renderInput={(params) => (
          <TextField {...params} label={props.label} />
        )}
      />
    );
  }
  return Placeholder;
};

export default AutocompletePicker;
