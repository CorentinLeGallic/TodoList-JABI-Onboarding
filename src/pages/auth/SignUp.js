import React, { useContext, useState } from 'react';
import isEmail from 'validator/lib/isEmail'
import Logo from '../../components/Logo';
import AuthInput from '../../components/AuthInput';
import AccentButton from '../../components/AccentButton';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {

  const navigate = useNavigate();

  const { createUser } = useContext(AuthContext);

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    email: null,
    password: null,
  })

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      username: null,
      email: null,
      password: null,
    };

    Object.entries(form).forEach(entry =>  {
      const [key, value] = entry;
      if(value.length === 0){
        console.warn(key + ' field is empty');
        newErrors[key] = 'Ce champ est obligaroire.';
      }
    })

    if(form.password.length < 6 && !newErrors.password){
      console.warn('The password should be at least 6 characters.');
      newErrors.password = 'Le mot de passe doit comporter au moins 6 caractères.';
    }

    if(!isEmail(form.email) && !newErrors.email){
      console.warn('The email adress is invalid.');
      newErrors.email = "L'adresse email est invalide.";
    }

    if(Object.values(newErrors).some(value => value)){
      console.log('Got an error before auth attempt');
      setErrors(newErrors);
      return;
    }

    await createUser(form.email, form.password, form.username)
      .then(async () => {
        navigate("../home");
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-email') {
          if(!newErrors.email){
            console.log('Email invalid from auth');
            newErrors.email = "L'adresse email est invalide.";
          }
        }

        if (error.code === 'auth/email-already-in-use') {
          if(!newErrors.email){
            console.log('Email already used from auth');
            newErrors.email = 'Cette adresse email est déjà utilisée.';
          }
        }

        setErrors(newErrors);
        console.error(error);
      })
  }

  return (
    <div className='auth-page'>
      <Logo fontSize={56} />
      <form className='auth-form' onSubmit={handleFormSubmit}>
        <h2 className='auth-title'>Créer un compte</h2>
        <div className='auth-inputs-container'>
          <AuthInput label="Nom d'utilisateur" value={form.username} handleInputChange={(e) =>setForm({...form, username: e.target.value})} error={errors.username} />
          <AuthInput label="Adresse email" value={form.email} handleInputChange={(e) => setForm({...form, email: e.target.value})} error={errors.email} />
          <AuthInput label="Password" value={form.password} handleInputChange={(e) => setForm({...form, password: e.target.value})} error={errors.password} isSecret={true} />
        </div>
        <AccentButton label="S'enregistrer" additionalStyle={{ width: '100%', marginTop: 10 }} />
        <div className='auth-switch-container'>
          <span className='auth-switch-text'>Vous avez déjà un compte ?</span>
          <Link to="../signin" className='auth-switch-link'>Connectez-vous !</Link>
        </div>
      </form>
    </div>
  )
}

export default SignUp;