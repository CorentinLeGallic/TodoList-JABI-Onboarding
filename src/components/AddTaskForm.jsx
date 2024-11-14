import React, { useState } from 'react';
import AddFormInput from './AddFormInput';
import AccentButton from './AccentButton';

const AddTaskForm = ({ categories }) => {

  // Store all the new task's informations
  const [form, setForm] = useState({
    taskName: "",
    taskDescription: "",
    categoryName: ""
  });

  // TEMPORARY
  const addCategory = (e) => {
    e.preventDefault();
  }

  return (
    <form className='add-form'>
        <h2 className='add-form-title'>Ajouter une tâche</h2>
        <div className='add-form-container'>
          <AddFormInput label='Nom'>
            <input className='add-form-input add-form-text-input' type="text" value={form.taskName} onChange={(e) => setForm({ ...form, taskName: e.target.value})} />
          </AddFormInput>
          <AddFormInput label='Description' className='add-form-input'>
            <textarea className='add-form-input add-form-textarea' value={form.taskDescription} onChange={(e) => setForm({ ...form, taskDescription: e.target.value})} rows={3} />
          </AddFormInput>
          <AddFormInput label='Catégorie' className='add-form-input'>
            <select className='add-form-select' value={form.categoryName} onChange={(e) => setForm({ ...form, categoryName: e.target.value})}>
              {categories.map(category => (
                <option key={category.id} value={category.title}>{category.name}</option>
              ))}
            </select>
          </AddFormInput>
          <AccentButton label="Ajouter" handleClick={addCategory} className='add-form-button' />
        </div>
    </form>
);
}

export default AddTaskForm;