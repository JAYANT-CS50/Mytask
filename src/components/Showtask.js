import React from 'react'

export const Showtask = ({tasklist, setTasklist, task, setTask}) => {


  const handleEdit = (id) => {
    const selectedTask = tasklist.find(todo => todo.id === id);
    setTask(selectedTask);

  }
  const handleDelete = (id) => {
    const updatedTaskList = tasklist.filter(todo => todo.id !== id);
    setTasklist(updatedTaskList);
  }



  return (
    <section className="showTask">
      <p className="head">
        <span>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </span>
        <span onClick={() => setTasklist([])} className="clearAll" >Clear All</span>
      </p>
      <ul>    
        {tasklist.map((todo) => (
          <li key={todo.id}> 
            <p>
              <span className="name">{todo.name }</span>
              <span className="time">{todo.time}</span>
            </p>
              <i onClick={() => handleEdit(todo.id)} className="bi bi-pencil-square"></i>
              <i onClick={() => handleDelete(todo.id)} className="bi bi-trash"></i>
          </li>
        ))}

      </ul>
    </section>
  )
}
