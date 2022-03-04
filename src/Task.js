import { Button, Typography } from '@mui/material'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core';

function Task({thisTask, listOfTasks, setListOfTasks}) {
    const [completed, setCompleted] = useState(false);

    const taskStyles = makeStyles(()=>({
        taskTitle: {
            textDecoration: completed ? 'line-through':'none'
        },
        task: {
            display: 'flex',
            flexDirection: 'row',
            padding: '10px',
            margin: '10px',
            width: '70%',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            borderRadius: '6px',
            boxShadow: '0px 0px 3px 3px lightgray',
        }
    }));

    const classes = taskStyles();

    function changeCompleted(){
        setCompleted(!completed);
    }

    function deleteTask(){
        var ind = listOfTasks.indexOf(thisTask);
        console.log(ind);
        listOfTasks.splice(ind, 1);
        setListOfTasks([...listOfTasks]);
    }

  return (
    <div className={classes.task}>
        <Typography
        className={classes.taskTitle}
        >
            {thisTask.title.title}
        </Typography>
        <div>
            <Button
            variant='contained'
            style={{
                backgroundColor: '#003979',
                margin: 5
            }}
            onClick={changeCompleted}>Complted</Button>

            <Button
            variant='contained'
            style={{
                backgroundColor: '#D60707',
                margin: 5
            }}
            onClick={deleteTask}>Delete</Button>
        </div>
    </div>
  )
}

export default Task