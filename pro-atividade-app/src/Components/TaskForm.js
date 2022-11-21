import { useState, useEffect } from 'react'

const initialTask = {
  id: 0,
  title: '',
  priority: 0,
  description: ''
};

export default function TaskForm(props) {

  const [task, setTask] = useState(currentTask());

  useEffect( () => {
    if (props.selectedTask.id !== 0)
      setTask(props.selectedTask);
  }, [props.selectedTask]);

  const InputTextHandler = (e) => {
    const {name, value} = e.target;

    setTask({...task, [name]: value})
  };

  function currentTask() {
    if (props.selectedTask.id !== 0) {
      return props.selectedTask;
    }
    else {
      return initialTask;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(props.selectedTask.id !== 0)
      props.updateTask(task);
    else
      props.addTask(task);
    
    setTask(initialTask);
  }

  const handleCancel = (e) => {
    e.preventDefault();

    props.cancelTask();
    setTask(initialTask);
  }

  return (
    <>
    <h1 className='h1Task'>{task.id !== 0 ? 'Editing Task ' + task.id : ''}</h1>
      <form className='row g-3' onSubmit={handleSubmit}>
          <div className='col-md-6'>
            <label className='form-label'>Title</label>
            <input 
              name='title'
              id='title'
              onChange={InputTextHandler}
              type='text' 
              className='form-control' 
              placeholder='title'
              value={task.title}
            />
          </div>
          <div className='col-md-6'>
            <label className='form-label'>Priority</label>
            <select 
              name='priority'
              id='priority' 
              onChange={InputTextHandler}
              className='form-select'
              value={task.priority}
            >
              <option defaultValue='0'>Choose...</option>
              <option value='1'>Low</option>
              <option value='2'>Medium</option>
              <option value='3'>High</option>
            </select>
          </div>
          <div className='col-md-12'>
            <label className='form-label'>Description</label>
            <textarea 
              name='description'
              id='description'
              onChange={InputTextHandler} 
              type='text' 
              placeholder='description' 
              className='form-control'
              value={task.description} 
            />
          </div>
          <hr />
          <div className='col-12'>
            {task.id === 0 ? (
                <button className='btn btn-outline-success' type='submit'> 
                  <i className='fas fa-plus me-2'></i> 
                  Task
                </button>
            ) : (
            <>
                <button className='btn btn-outline-success me-2' type='submit'> 
                  <i className='fa-solid fa-circle-check me-2'></i> 
                  Save
                </button>
                <button onClick={handleCancel} className='btn btn-outline-danger'> 
                  <i className='fa-solid fa-ban me-2'></i> 
                  Cancel
                </button>
            </>
            )}
          </div>
      </form>
    </>
  )
}
