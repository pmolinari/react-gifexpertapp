
export const getGifs = async ( category ) => {

    const api_key = 'MSAl21UbPtFfo4TFKCIojzP8E7RvsNA9';
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=${api_key}`);
    const { data } = await response.json();
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        };
    });
    
    return gifs;
};