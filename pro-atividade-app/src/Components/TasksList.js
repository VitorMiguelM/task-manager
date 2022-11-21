import React from 'react'
import Task from './Task'

export default function TasksList(props) {
  return (
    <div className='mt-3'>
      {props.tasks.map((task) => ( 
        <Task 
          key={task.id}
          task={task}
          deleteTask={props.deleteTask}
          selectTask={props.selectTask}
        />
      ))}
    </div>    
  )
}
