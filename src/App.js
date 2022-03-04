import { Typography } from '@mui/material';
import { useState } from 'react';
import Task from './Task';
import TaskCard from './TaskCard';
import { makeStyles } from '@material-ui/core';

function App() {

  const [listOfTasks, setListOfTasks] = useState([]);

  const useStyle = makeStyles(()=>({
    root: {
      color: '#003979',
      fontWeight: 600
    },
    app: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#E8F3FE',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }));

  const classes = useStyle();

  return (
    <div className={classes.app}>
      <TaskCard listOfTasks={listOfTasks} setListOfTasks={setListOfTasks}/>

      <Typography
      variant='h5'
      className={classes.root}>
        Your Tasks
      </Typography>

      {
        listOfTasks.map((nthTask)=>(
            <Task thisTask={nthTask} listOfTasks={listOfTasks} setListOfTasks={setListOfTasks}/>
        ))
      }
    </div>
  );
}

export default App;
