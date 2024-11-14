import React from 'react';

const TaskGroup = ({ title, description, children }) => {
  return (
    <li className='task-group'>
        <div className='task-group-header'>
            <h2 className='task-group-title'>{title} :</h2>
            <p className='task-group-description'>{description}</p>
        </div>
        <hr className='task-group-separator'/>
        <ul className='tasks-container'>{children}</ul>
    </li>
  );
}

export default TaskGroup;