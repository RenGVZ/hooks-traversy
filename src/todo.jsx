import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  todoClass: {
    color: 'blue',
    fontSize: '20px',
    fontWeight: 'bold'
  }
})

const Todo = ({index, todo, completeTodo, deleteTodo}) => {
  const classes = useStyles();
  return (
    <div 
      style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} 
      className={classes.todoClass}>
      {index + 1} {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </div>
  )
}

export default Todo;
