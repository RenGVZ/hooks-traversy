import React, { useState } from 'react';

const TaskForm = ({addTask}) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value) return;
    addTask(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Type a task..." 
        value={value} 
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

export default TaskForm;
