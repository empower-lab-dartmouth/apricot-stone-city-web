import * as React from 'react';
import Fab from '@mui/material/Fab';
import {OptionData} from './option-model';
import {useRecoilState} from 'recoil';
import {currentPageState} from '../../state/recoil';
import {handleAction} from '../../state/handle-action';

type OptionParams = {
  optionData: OptionData
}

const Option: React.FC<OptionParams> = ({optionData}) => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);


  return (
    <Fab color="primary" variant="extended"
      aria-label="add" onClick={() =>
        handleAction(optionData.action, currentPage, setCurrentPage)}>
      {optionData.text}
    </Fab>
  );
};
export default Option;
