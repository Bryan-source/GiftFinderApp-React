import {useState, useEffect} from 'react';
import { getGiph } from '../helpers/getGiph';

//useFetchGif se encarga de hacer petición automáticamente cuando se cargue el componente la primera vez
export const useFetchGif = (category) => {
    
    const [state, setstate] = useState({
        data: [],
        loading: false
    });

    //Este hook sirve para cargar una sola vez la información es como un do once, pero con el argumento de [category] hará una ecepción de cargar una sola vez y cargará mas contenido porque cambio la categoría  
    useEffect(() => {
        getGiph(category)
            .then(imgs => {
                //Tiempo en que tarda para cargar antes de mostrar el contenido
                setTimeout(() => {
                    setstate({
                        data: imgs,
                        loading: true
                    })
                }, 800);
            })
    }, [category]); //El arreglo vacío quiere decir que no retorna dependencias por lo que la función se va a ejecutar una sola vez en el código.
                    //El arreglo ya no es vació porque se está previniento que la categoria vaya a cambiar entonces si esta cambia, este hook se va a volver a ejecutar pero si no cambia sólo se seguirá ejecutando una sola vez.



    return state;
}

