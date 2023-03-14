import React from 'react'
import { useForm } from '../hooks/useForm'

//usa boostrap en stilos
//https://www.udemy.com/course/react-cero-experto/learn/lecture/19824468#questions

export const FormWithCustomHook = () => {
  
  const { formState, onInputChange, onResetForm, username, email, password } = useForm({
    username: '',
    email: '',
    password: ''
  });

  
  //const { username, email, password } = formState;

  return (
    <>
        <h1>Formulario con custom Hook</h1>
        <hr />

        <input 
            type="text" 
            className='form-control'
            placeholder='Username'
            name='username'
            value={ username }
            onChange={ onInputChange }
        />

        <input 
            type="text" 
            className='form-control mt-2'
            placeholder='rlagosg@unah.hn'
            name='email'
            value={ email }
            onChange={ onInputChange }
        />

        <input 
            type= 'password'
            className='form-control mt-2'
            placeholder='Constrasenia'
            name='password'
            value={ password }
            onChange={ onInputChange }
        />

        <button onClick={ onResetForm } className='btn btn-primary mt-2'>Borrar</button>

    </>    
  );
}
