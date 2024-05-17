import React, { useState } from 'react'

function App() {
  const [task, setTask] = useState("")
  const [taskList, setTaskList] = useState([]);

  function handleChange(e) {
    setTask(e.target.value);
  }
  function onSubmission(e) {
    e.preventDefault();
    setTaskList((prevTaskList) => [...prevTaskList, task]);
    setTask("");
    console.log(taskList);

  }
  return (
    <>
      <div className="header">
        <h1>To-do List</h1>
        <form onSubmit={onSubmission}>
          <input type="text" placeholder='Enter your task here' onChange={handleChange} />
          <button type='submit'>Add Task</button>
        </form>
      </div>
      <div className="task">
        {taskList.length > 0 ?
          taskList.map((tasks, index) => (<ul key={index}>{tasks}</ul>)) :
          <span>No task here</span>
        }
      </div>
    </>
  )
}

export default App