import React, { useState } from 'react';
import Task from './task';
import TaskForm from './taskForm';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      text: 'Clean room',
      isCompleted: false
    },
    {
      text: 'Build app',
      isCompleted: false
    },
    {
      text: 'Get err done',
      isCompleted: false
    }
  ])

  const addTask = (text) => {
    const newTasks = [...tasks, { text }];
    setTasks(newTasks);
  }

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = true;
    setTasks(newTasks);
  }

const removeTask = (index) => {
  const newTasks = [...tasks];
  newTasks.splice(index, 1);
  setTasks(newTasks);
}

  return (
    <div>
      <h1>The are your tasks</h1>
      <div className="task-list">
        {tasks.map((task, index) => (
          <Task 
            key={index} 
            task={task} 
            index={index}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        ))}
        <TaskForm addTask={addTask}/>
      </div>
    </div>
  )
}

export default App;
