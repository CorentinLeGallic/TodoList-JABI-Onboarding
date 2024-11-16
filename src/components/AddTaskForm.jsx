import React, { useState } from 'react';
import FormInputContainer from './FormInputContainer';
import AccentButton from './AccentButton';
import useCategoriesStore from '../zustand/useCategoriesStore';
import useTasksStore from '../zustand/useTasksStore';

const AddTaskForm = () => {

  const { categories } = useCategoriesStore();
  const { addTask } = useTasksStore();

  // Store all the new task's informations
  const [form, setForm] = useState({
    taskName: "",
    taskDescription: "",
    categoryId: categories.length > 0 ? categories[0].id : "Select a category"
  });

  const [errors, setErrors] = useState({
    taskName: null,
    taskDescription: null,
    categoryId: null
  });

  // TEMPORARY
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {
      taskName: null,
      taskDescription: null,
      categoryId: null
    };

    // Reset the error object
    setErrors(newErrors);

    Object.entries(form).forEach(entry =>  {
      const [key, value] = entry;
      if(value.length === 0){
        console.warn(key + ' field is empty');

        newErrors[key] = 'Ce champ est obligaroire.';
      }
    })

    if(!categories.find(category => category.id === form.categoryId)){
      console.warn('Given category does not exist');

      console.log(categories);
      console.log(form);
      
      
      newErrors.categoryId = "Cette catégorie n'est pas valide.";
    }

    if(Object.values(newErrors).some(value => value)){
      console.log('Got an error before task creation attempt');
      setErrors(newErrors);
      return;
    }

    addTask(form.taskName, form.taskDescription, form.categoryId);
  }

  return (
    <form id='add-task-form'>
        <h2 id='add-task-form-title'>Ajouter une tâche</h2>
        <div id='add-task-form-container'>
          <FormInputContainer label='Nom' error={errors.taskName} className='add-task-form-input-container'>
            <input type="text" className='add-task-form-input add-task-form-text-input' value={form.taskName} onChange={(e) => setForm({ ...form, taskName: e.target.value})} />
          </FormInputContainer>
          <FormInputContainer label='Description' error={errors.taskDescription} className='add-task-form-input-container'>
            <textarea className='add-task-form-input add-task-form-textarea' value={form.taskDescription} onChange={(e) => setForm({ ...form, taskDescription: e.target.value})} rows={3} />
          </FormInputContainer>
          <FormInputContainer label='Catégorie' error={errors.categoryId} className='add-task-form-input-container'>
            <select className='add-task-form-select' value={form.categoryId} onChange={(e) => setForm({ ...form, categoryId: e.target.value})}>
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </FormInputContainer>
          <AccentButton label="Ajouter" handleClick={handleFormSubmit} id='add-task-form-button' />
        </div>
    </form>
);
}

export default AddTaskForm;