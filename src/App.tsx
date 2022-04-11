import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import './App.css';
import Drawer from './components/Drawer';
import MiniDrawer from './components/NewDrawer'
import Employee from './components/employee/Employee';

import { makeStyles, createStyles } from "@mui/styles";


const useStyles = makeStyles((theme?: any) => createStyles({
    container: {
        display: "flex"
    }
}));

function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <div className={classes.container}>
        <Drawer />
        <Employee />
        {/* <MiniDrawer /> */}
      </div>
    </div>
  );
}

export default App;
