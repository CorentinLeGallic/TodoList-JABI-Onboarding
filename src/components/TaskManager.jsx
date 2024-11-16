import React, { useState } from 'react';
// import AddCategoryForm from '../components/AddCategoryForm';
import AddTaskForm from '../components/AddTaskForm';
import TaskGroup from './TaskGroup';
import Task from './Task';
import useTasksStore from '../zustand/useTasksStore';
import useCategoriesStore from '../zustand/useCategoriesStore';
import useModalStore from '../zustand/useModalStore';
import EditTaskModal from './EditTaskModal';
import { animated } from 'react-spring';

const TaskManager = () => {

  // TEMPORARY
  // const [categories, setCategories] = useState([
  //   {
  //     id: 0,
  //     name: "Catégorie 1",
  //     description: "La première catégorie"
  //   }, {
  //     id: 1,
  //     name: "Catégorie 2",
  //     description: "La deuxième catégorie"
  //   }, {
  //     id: 2,
  //     name: "Catégorie 3",
  //     description: "La troisième catégorie"
  //   }
  // ]);

  const { categories } = useCategoriesStore();

  // TEMPORARY
  // const [tasks, setTasks] = useState([
  //   {
  //     id: 0,
  //     title: "Tâche 1",
  //     description: "La première tâche",
  //     category: "Catégorie 2",
  //     isCompleted: false
  //   }, {
  //     id: 1,
  //     title: "Tâche 2",
  //     description: "La deuxième tâche",
  //     category: "Catégorie 3",
  //     isCompleted: false
  //   }, {
  //     id: 2,
  //     title: "Tâche 3",
  //     description: "La troisième tâche",
  //     category: "Catégorie 1",
  //     isCompleted: false
  //   }
  // ]);

  const { tasks, changeIsCompleted, deleteTask } = useTasksStore();

  const { showModal } = useModalStore();

  // TEMPORARY
  const handleTaskGroupEdit = () => {
  
  }

  // TEMPORARY
  const handleTaskGroupDelete = () => {
    
  }

  // TEMPORARY
  const handleTaskEdit = () => {
    const AnimatedEditTaskModal = animated(EditTaskModal);
    showModal(<AnimatedEditTaskModal />)
  }

  // TEMPORARY
  const handleTaskDelete = (taskId) => {
    deleteTask(taskId);
  }

  // TEMPORARY
  const handleTaskCheckChange = (task) => {
    changeIsCompleted(task.id, !task.isCompleted);
    // setTasks(tasks.map(task => {
    //   if(task.id === currentTask.id){
    //     return {...task, isCompleted: !task.isCompleted};
    //   }
    //   return task;
    // }))
  }

  return (
    <main id='home-main'>
      <section id='home-main-section'>
        <ul id='home-main-container'>
          {categories.map(category => (
            <TaskGroup key={category.id} title={category.name} description={category.description} handleTaskGroupEdit={handleTaskGroupEdit} handleTaskGroupDelete={handleTaskGroupDelete}>
              {tasks.filter(task => task.categoryId === category.id).map(task => (
                <Task key={task.id} task={task} handleEdit={handleTaskEdit} handleDelete={() => handleTaskDelete(task.id)} handleCheckChange={handleTaskCheckChange} />
              ))}
            </TaskGroup>
          ))}
        </ul>
      </section>
      <section id='home-right-menu'>
        {/* <AddCategoryForm categories={categories} /> */}
        <AddTaskForm />
      </section>
    </main>
  );
}

export default TaskManager;