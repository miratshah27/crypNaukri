import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import {useState} from 'react';
import { makeStyles } from '@material-ui/core';

function TaskCard({listOfTasks, setListOfTasks}) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState(new Date());

  const takCardStyle = makeStyles(()=>({
    taskCard: {
      width: '50%',
      boxShadow: '10px',
      borderRadius: '10px',
      display: 'flex',
      margin: 'auto',
      padding: '20px',
      margin: '15px',
      backgroundColor: 'white',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0px 0px 3px 3px lightgray',
    }
  }));

  const classes = takCardStyle();

  function createNewTask(){
    var len = listOfTasks.length;
    var tsk = {
      id: {len},
      title: {title},
    }
    setListOfTasks([...listOfTasks, tsk]);
  }

  return (
    <div className={classes.taskCard}>
        <Typography
        variant='h5'
        color="#003979"
        fontWeight={600}>Task Manager</Typography>

        <TextField
        margin='normal'
        variant='outlined'
        label='Task Title'
        value={title}
        fullWidth
        onChange={e => setTitle(e.target.value)}/>

        <TextField
        margin='normal'
        variant='outlined'
        label='Task Description'
        value={desc}
        fullWidth
        multiline
        rows={4}
        onChange={e => setDesc(e.target.value)}/>

        <TextField
        label="Date"
        type="date"
        margin='normal'
        value={date}
        fullWidth
        onChange={e => setDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <Button
      variant='contained'
      margin='normal'
      style={{
          backgroundColor: '#003979'
      }}
      onClick={createNewTask}>Create Task</Button>
    </div>
  )
}

export default TaskCard