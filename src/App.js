import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState({ task: '', date: '', time: '' });
  const [taskList, setTaskList] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setTask(prev => ({
      ...prev,
      [name]:value
    }));
  }

  console.log(task);

  function handleSubmit(e) {
    e.preventDefault();
    if (task.task && task.date && task.time) {
      setTaskList(prev => [...prev, task]);
      setTask({ task: '', date: '', time: '' });
    }else{
      alert("All fields are mandatory...")
    }
  }

  return (
    <div>
      <header>
        <h1>Todo Application</h1>
      </header>
      <div className='todoParent'>
        <form onSubmit={handleSubmit}>
          {/* Task Entering Input */}
          <label htmlFor='task'>Input Task: </label><br />
          <input
            type='text'
            name='task'
            placeholder='Enter Your Task Here ... '
            id='task'
            value={task.task}
            onChange={handleChange}
          /><br />
          {/* Date selecting input */}
          <label htmlFor='date'>Select Date:</label><br />
          <input
            type='date'
            name='date'
            id='date'
            value={task.date}
            onChange={handleChange}
          /><br />
          {/* Time Selecting input */}
          <label htmlFor='time'>Select Time:</label><br />
          <input
            type='time'
            name='time'
            id='time'
            value={task.time}
            onChange={handleChange}
          /><br />
          {/* Add Task Button */}
          <button type='submit'>Add Task</button>
        </form>


        {/* Here adding task details */}
        <div className='taskContainer'>
          <h3>Task List:</h3>
          <ul>
            {taskList.map((t, index) => (
              <li key={index}>
                <p>Task: {t.task}</p>
                <p>Date: {t.date}</p>
                <p>Time: {t.time}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
