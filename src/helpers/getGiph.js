
export const getGiph = async(category) => {
    const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=MNlqSYmBxvc2RqiV5GcTo98WROSMh4V7`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifData = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url //El ? luego de imágenes sirve para verificar si la imagen existe en el arreglo.
        }

    });

    return gifData;
}