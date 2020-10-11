import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  task: {
    color: 'green',
    fontSize: '20px',
    fontWeight: 'bold'
  }
})

const Task = ({task, index, completeTask, removeTask}) => {
  const classes = useStyles();
  return (
    <div style={{textDecoration: task.isCompleted ? 'line-through' : 'none'}} className={classes.task}>
      {index + 1} {task.text}
      <div>
        <button onClick={() => completeTask(index)}>Completed</button>
        <button onClick={() => removeTask(index)}>X</button>
      </div>
    </div>
  )
}

export default Task;
