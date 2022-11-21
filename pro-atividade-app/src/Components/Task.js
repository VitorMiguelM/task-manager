import React from 'react'

export default function Task(props) {

  function priorityLabel(param){
    switch(param) {
      case '1':
        return 'low';
      case '2': 
        return 'medium';
      case '3':
        return 'high';
      default:
        return 'not defined';
    }
  }

  function priorityStyle(param, icon){
    switch(param) {
      case '1':
        return icon ? 'smile': 'success';
      case '2':
        return icon ? 'meh': 'warning';
      case '3':
        return icon ? 'frown' : 'danger';
      default: 
        return 'not defined';
    }
  }

  return (
              <div className={'card mb-2 shadow-sm border-' + priorityStyle(props.task.priority)}>
                <div className='card-body'>
                  <div className='d-flex justify-content-between'>
                    <h5 className='card-title'>
                      <span className='badge bg-secondary me-2'>{props.task.id}</span>
                      - {props.task.title}
                    </h5>
                    <h6>Priority: 
                      <span className={'ms-1 text-' + priorityStyle(props.task.priority)}>
                        <i className={'me-1  far fa-' + priorityStyle(props.task.priority, true)}></i>
                        {priorityLabel(props.task.priority)}
                      </span>
                    </h6>
                  </div>                
                    <p className='card-text'>
                       - {props.task.description}
                    </p>
                    <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                      <button className='btn btn-outline-primary me-2' onClick={() => props.selectTask(props.task.id)}>
                        <i className='fas fa-pen me-2'></i>
                        Edit
                      </button>
                      <button className='btn btn-outline-danger me-2' onClick={() => props.deleteTask(props.task.id)}>
                        <i className='fas fa-trash me-2'></i>
                        Delete
                      </button>
                    </div>
                </div>
            </div>      
  )
}
