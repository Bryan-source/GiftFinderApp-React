import React, {useState} from 'react';
import PropTypes from 'prop-types';

//setCategories lo tomamos desde GifExpertapp
export const AddCatgory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('') //El useState nunca puede ir vacío porque el programa no acepta un valor undefined por lo tanto hay que poner en comillas '' para que represente que es vacío.

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            //cats hace referencia al arreglo categories desde GifExpertApp.
            setCategories(cats => [inputValue, ...cats ]);
            setInputValue("");
        }
    }

    return (
        //No es necesario los símbolos del fragment <></> ya que estos sólo se utilizan para agrupar html pero el form ya lo está haciendo. 
        <form onSubmit = {handleSubmit}>
            <input
                type = 'text'
                value = {inputValue}
                onChange = {handleInputChange}
            />          
        </form>
        )
    
}

AddCatgory.propTypes = {
    setCategories: PropTypes.func.isRequired
}