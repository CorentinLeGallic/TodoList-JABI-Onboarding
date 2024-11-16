import React, { useState } from 'react';
import ModalOverlay from './ModalOverlay';
import FormInputContainer from './FormInputContainer';
import useCategoriesStore from '../zustand/useCategoriesStore';
import useModalStore from '../zustand/useModalStore';
import useTasksStore from '../zustand/useTasksStore';

const EditTaskModal = ({ style={} }) => {

    const { hideModal } = useModalStore();

    const { categories } = useCategoriesStore();
    const { editTask } = useTasksStore();

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
            console.log('Got an error before task edit attempt');
            setErrors(newErrors);
            return;
        }

        editTask(form.taskName, form.taskDescription, form.categoryId);
    }

    return (
        <ModalOverlay>
            <div id="edit-task-modal" style={style}>
                <h2 id="edit-task-modal-title">Modifier une tâche</h2>
                <hr id="edit-task-modal-separator" />
                <form action="" id="edit-task-modal-form" onSubmit={handleFormSubmit}>
                    <FormInputContainer label='Nom' error={errors.taskName} className='edit-task-form-input-container'>
                        <input type="text" className="edit-task-form-input edit-task-form-text-input" value={form.taskName} onChange={(e) => setForm({ ...form, taskName: e.target.value})} />
                    </FormInputContainer>
                    <FormInputContainer label='Description' error={errors.taskDescription} className='edit-task-form-input-container'>
                        <textarea className="edit-task-form-input edit-task-form-textarea" value={form.taskDescription} onChange={(e) => setForm({ ...form, taskDescription: e.target.value})} rows={3} />
                    </FormInputContainer>
                    <FormInputContainer label='Catégorie' error={errors.categoryId} className='edit-task-form-input-container'>
                        <select className='edit-task-form-select' value={form.categoryId} onChange={(e) => setForm({ ...form, categoryId: e.target.value})}>
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </select>
                    </FormInputContainer>
                    <div id="edit-task-form-actions">
                        <button type="button" onClick={hideModal} id="cancel-edit-task-form" className="edit-task-form-action">Annuler</button>
                        <button type="submit" id="submit-edit-task-form" className="edit-task-form-action">Valider</button>
                    </div>
                </form>
            </div>
        </ModalOverlay>
    );
}

export default EditTaskModal;