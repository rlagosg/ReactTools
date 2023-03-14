import React from 'react'
import { useCounter } from '../hooks/useCounter';
import { useFech } from '../hooks/useFech'


//IMPLEMENTACION DE USEFECH
export const MultipleCustomHooks = () => {


  const { counter, decrement, increment } = useCounter(1);

  const { data, hasError, isLoading} = useFech(`https://rickandmortyapi.com/api/character/${counter}`);


  //si recibimos un arreglo y dentro el objeto, primero evaluamos y luego setiamos
  //const { id, name, status, species } = !!data && data[0];

  //si recibimos un objeto
  const { id, name, status, species, image } = !!data && data;

  console.log(counter);

  return (
    <>
        <h1>Rick And Morty</h1>
        <hr />

        {
            isLoading
                ? (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                )
                : (
                    <blockquote className='blockquote text-end'>
                        <img className="img-fluid" src={image} />
                        <p className='mb-1'>id: {id} - estado: {status} - especie: {species}</p>
                        <footer className='blockquote-footer'> { name }</footer>
                    </blockquote>
                )
        }

        <button 
            onClick={ () => decrement() } 
            disabled = { isLoading }
            className='btn btn-primary'>
            Previus
        </button>
        <button 
            onClick={ () => increment() } 
            disabled = { isLoading }
            className='btn btn-primary'>
            Next
        </button>
    </>
  )
}
