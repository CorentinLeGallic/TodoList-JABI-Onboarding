import React, { useState } from 'react';

const Task = ({ task, handleEdit, handleDelete, handleCheckChange }) => {

  // State to manage the visibility of the task details
  const [detailsAreVisible, setDetailsAreVisible] = useState(false);

  // Toggles the visibility of task details.
  const changeDetailsVisibility = () => {
      setDetailsAreVisible(!detailsAreVisible);
  };

  return (
    <li className='task'>
      <div className="task-header">
        <input className={"task-checkbox" + (task.isCompleted ? " completed" : "")} onChange={() => handleCheckChange(task)} type="checkbox" checked={task.isCompleted} />
        <h3 className="task-title">{task.title}</h3>
        <div className={"task-state " + (task.isCompleted ? "completed" : "")}>{task.isCompleted ? "Complétée" : "En cours"}</div>
        <button className="task-reveal" onClick={changeDetailsVisibility}>
          <svg className={"task-reveal-icon" + (detailsAreVisible ? " active" : "")} xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
              <rect x="0" fill="none" width="24" height="24" />
              <g>
                  <path d="M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586" />
              </g>
          </svg>
        </button>
      </div>
      <div className={"task-details" + (detailsAreVisible ? " visible" : "")}>
        <p className="task-description">{task.description}</p>
        <div className="task-actions">
            <button onClick={handleEdit} className="task-action edit-task">Modifier</button>
            <button onClick={handleDelete} className="task-action delete-task">Supprimer</button>
        </div>
      </div>
    </li>
  );
}

export default Task;