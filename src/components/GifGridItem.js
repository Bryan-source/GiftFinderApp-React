import React from 'react'

//Aquí se hace una desestructuración de las propiedades de imagenes detectadas por el map en el componente GifGrid
export const GifGridItem = ({id, title, url}) => {


    return (
        <div className = "card">
            <img src = {url} alt = {title}/>
            <p>{title}</p>
        </div>
    )
}
