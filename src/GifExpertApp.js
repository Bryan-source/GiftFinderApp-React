import React, {useState} from 'react';
import { AddCatgory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const [state, setstate] = useState(initialState)
    //categories = ['OnePucnh', 'SamuraiX', 'DragonBall']
    //const [categories, setCategories] = useState(['OnePucnh', 'SamuraiX', 'DragonBall']);
    const [categories, setCategories] = useState(['']);
    
    /* const handleAdd = () => {
        //Agrega un elemento más al arreglo
        //setCategories([...categories, 'HunterSnack']); // En caso de que se quiera que el elemento se agregue al princio usamos ['HunterSnack', ...categories]


        //Otro método más conveniente para hacer la linea anterior  es a partir de un callback el cual como se puede ver toma como argumento una referencia a categories y luego utiliza la función arrow.
        //setCategories(cats => [...categories, 'HunterSnack']);
    } */
    
    return (
        <>
            <h2>Gift Finder App</h2>
            <AddCatgory setCategories = {setCategories}/>
            <hr/>
            
            {/* <button onClick = {handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map(category => (
                        //return <li key={category}>{category}</li>
                        <GifGrid 
                            key = {category}
                            category = {category}
                        />
                    ))
                }
            </ol>
        </>
    );
    
}

export default GifExpertApp;