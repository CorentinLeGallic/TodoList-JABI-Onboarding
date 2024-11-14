import React, { useState } from 'react';
import AccentButton from './AccentButton';
import AddFormInput from './AddFormInput';

const AddCategoryForm = ({ categories }) => {

    // Store all the new category's informations
    const [form, setForm] = useState({
        categoryName: "",
        categoryDescription: "",
    });

    // TEMPORARY
    const addCategory = (e) => {
        e.preventDefault();
    }

    return (
        <form className='add-form'>
            <h2 className='add-form-title'>Ajouter une catégorie</h2>
            <div className='add-form-container'>
                <AddFormInput label='Nom'>
                    <input className='add-form-input add-form-text-input' type="text" value={form.categoryName} onChange={(e) => setForm({ ...form, categoryName: e.target.value})} />
                </AddFormInput>
                <AddFormInput label='Description' className='add-form-input'>
                    <textarea className='add-form-input add-form-textarea' value={form.categoryDescription} onChange={(e) => setForm({ ...form, categoryDescription: e.target.value})} rows={3} />
                </AddFormInput>
                <AccentButton label="Ajouter" handleClick={addCategory} className='add-form-button' />
            </div>
        </form>
    );
}

export default AddCategoryForm;