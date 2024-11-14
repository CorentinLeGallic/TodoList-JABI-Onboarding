import React, { useState } from 'react';
import AddCategoryForm from '../components/AddCategoryForm';
import AddTaskForm from '../components/AddTaskForm';
import TaskGroup from './TaskGroup';
import Task from './Task';

const TaskManager = () => {

  // TEMPORARY
  const [categories, setCategories] = useState([
    {
      id: 0,
      name: "Catégorie 1",
      description: "La première catégorie"
    }, {
      id: 1,
      name: "Catégorie 2",
      description: "La deuxième catégorie"
    }, {
      id: 2,
      name: "Catégorie 3",
      description: "La troisième catégorie"
    }
  ]);

  // TEMPORARY
  const [tasks, setTasks] = useState([
    {
      id: 0,
      title: "Tâche 1",
      description: "La première tâche",
      category: "Catégorie 2",
      isCompleted: false
    }, {
      id: 1,
      title: "Tâche 2",
      description: "La deuxième tâche",
      category: "Catégorie 3",
      isCompleted: false
    }, {
      id: 2,
      title: "Tâche 3",
      description: "La troisième tâche",
      category: "Catégorie 1",
      isCompleted: false
    }
  ]);

  // TEMPORARY
  const handleTaskEdit = (e) => {
    
  }

  // TEMPORARY
  const handleTaskDelete = (e) => {
    
  }

  // TEMPORARY
  const handleTaskCheckChange = (currentTask) => {
    setTasks(tasks.map(task => {
      if(task.id === currentTask.id){
        return {...task, isCompleted: !task.isCompleted};
      }
      return task;
    }))
  }

  return (
    <main id='home-main'>
      <section id='home-main-section'>
        <ul id='home-main-container'>
          {categories.map(category => (
            <TaskGroup key={category.id} title={category.name} description={category.description}>
              {tasks.filter(task => task.category === category.name).map(task => (
                <Task key={task.id} task={task} handleEdit={handleTaskEdit} handleDelete={handleTaskDelete} handleCheckChange={handleTaskCheckChange} />
              ))}
            </TaskGroup>
          ))}
        </ul>
      </section>
      <section id='home-right-menu'>
        <AddCategoryForm categories={categories} />
        <AddTaskForm categories={categories} />
      </section>
    </main>
  );
}

export default TaskManager;