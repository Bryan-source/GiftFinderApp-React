import React from 'react';
import { useFetchGif } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    /* useEffect(() => {
        getGiph(category)
            .then(setImagen)
    }, [category]); */ //El arreglo vacío quiere decir que no retorna dependencias por lo que la función se va a ejecutar una sola vez en el código.
                    //El arreglo ya no es vació porque se está previniento que la categoria vaya a cambiar entonces si esta cambia, este hook se va a volver a ejecutar pero si no cambia sólo se seguirá ejecutando una sola vez.
                    

    //const [imagen, setImagen] = useState([]);

    //useFetchGif se encarga de hacer petición automáticamente cuando se cargue el componente la primera vez
    const {data:images, loading} = useFetchGif(category);

    return (
        <>
            <h3>{category}</h3>
            {/* <ol>
                {
                    imagen.map(({id, title}) => (
                        <li key={id}>{title}</li>
                    ))           
                }
            </ol> */}
            {!loading && <p className="animate__animated animate__flash">Loading...</p>}

            <div className="card-grid animate__animated animate__backInUp">
                {
                images.map(img => (
                    <GifGridItem 
                        key = {img.id}
                        {...img} //Lo que hace es hacer cada propiedad del arreglo de las imágenes como propiedades independientes de esta forma es más óptimo trabajar
                    />
                ))
                }
            </div>
           
        </>
    )
}
