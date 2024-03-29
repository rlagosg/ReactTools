import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {

  const [formState, setFormState] = useState( initialForm );
  
  const { username, email, password } = formState;

  const onResetForm = () => setFormState( initialForm );

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
        ...formState,
        [ name ]: value
    });
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}

