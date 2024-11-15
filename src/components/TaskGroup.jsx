import React from 'react';

const TaskGroup = ({ title, description, handleTaskGroupEdit, handleTaskGroupDelete, children }) => {
  return (
    <li className='task-group'>
        <div className='task-group-header'>
          <div className='task-group-infos'>
            <h2 className='task-group-title'>{title} :</h2>
            <p className='task-group-description'>{description}</p>
          </div>
          <div className='task-group-actions-container'>
            <button className='task-group-action task-group-edit' onClick={handleTaskGroupEdit}>
              <svg className='task-group-action-icon' fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 512 512">
                <g>
                  <g>
                    <path d="m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z"/>
                  </g>
                </g>
              </svg>
            </button>
            <button className='task-group-action task-group-delete' onClick={handleTaskGroupDelete}>
              <svg className='task-group-action-icon' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
                <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
              </svg>
            </button>
          </div>
        </div>
        <hr className='task-group-separator'/>
        <ul className='tasks-container'>{children}</ul>
    </li>
  );
}

export default TaskGroup;