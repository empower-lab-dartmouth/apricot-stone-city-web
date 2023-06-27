import * as React from 'react';
import {OptionData} from './option-model';
import {useRecoilState} from 'recoil';
import {currentPageState} from '../../state/recoil';
import {handleAction} from '../../state/handle-action';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Typography from '@mui/material/Typography';
import {AuthContext} from '../../context/auth-context';


type OptionParams = {
  optionData: OptionData
}

const Option: React.FC<OptionParams> = ({optionData}) => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const {currentUser} = React.useContext(AuthContext);


  return (
    <BottomNavigationAction onClick={() =>
      handleAction({
        ...optionData,
        type: 'option'}, currentPage, setCurrentPage,
        currentUser?.email as string)}>
      <Typography variant="h3" gutterBottom>
        {optionData.text}
      </Typography>
    </BottomNavigationAction>
  );
};
export default Option;
