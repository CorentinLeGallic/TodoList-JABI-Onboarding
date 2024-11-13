import React, { useContext, useState } from 'react';
import Logo from '../../components/Logo';
import AuthInput from '../../components/AuthInput';
import AccentButton from '../../components/AccentButton';
import isEmail from 'validator/lib/isEmail';
import { Link, useNavigate } from "react-router-dom";
import AuthError from '../../components/AuthError';
import { AuthContext } from '../../contexts/AuthProvider';

const SignIn = () => {

  const navigate = useNavigate();

  const { loginUser } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: null,
    password: null,
    credentials: null
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      email: null,
      password: null,
      credentials: null,
    };

    Object.entries(form).forEach(entry =>  {
      const [key, value] = entry;
      if(value.length === 0){
        console.warn(key + ' field is empty');
        newErrors[key] = 'Ce champ est obligaroire.';
      }
    })

    if(!isEmail(form.email) && !newErrors.email){
      console.warn('The email adress is invalid.');
      newErrors.email = "L'adresse email est invalide.";
    }

    if(Object.values(newErrors).some(value => value)){
      console.log('Got an error before auth attempt');
      setErrors(newErrors);
      return;
    }

    loginUser(form.email, form.password)
      .then(() => {
        console.log("User signed in !");
        navigate("../home");
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          if(!newErrors.email){
            console.log('Email invalid from auth');
            newErrors.email = "L'adresse email est invalide.";
          }
        }

        if (error.code === 'auth/invalid-credential') {
          newErrors.credentials = "L'adresse email ou le mot de passe est incorrect.";
        }

        setErrors(newErrors);
        console.error(error);
    });
  }

  return (
    <div className='auth-page'>
      <Logo fontSize={56} />
      <form className='auth-form' onSubmit={handleFormSubmit}>
        <h2 className='auth-title'>Se connecter</h2>
        <div className='auth-inputs-container'>
          <AuthInput label="Adresse email" value={form.email} handleInputChange={(e) => setForm({...form, email: e.target.value})} error={errors.email} />
          <AuthInput label="Password" value={form.password} handleInputChange={(e) => setForm({...form, password: e.target.value})} error={errors.password} isSecret={true} />
        </div>
        {errors.credentials  && <AuthError label={errors.credentials} />}
        <AccentButton label="Se connecter" additionalStyle={{ width: '100%', marginTop: errors.credentials ? 5 : 10 }} />
        <div className='auth-switch-container'>
          <span className='auth-switch-text'>Vous n'avez pas encore de compte ?</span>
          <Link to="../signup" className='auth-switch-link'>Inscrivez-vous !</Link>
        </div>
      </form>
    </div>
  )
}

export default SignIn;