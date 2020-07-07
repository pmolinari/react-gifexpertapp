import React from 'react'

import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <div className="container-sm">
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>

            { loading && <h4 className="animate__animated animate__flash">Loading...</h4> }

            <div className="row">
                
                <div className="col-md-3">
                    {
                        images.map( (img) => <GifGridItem key={ img.id } { ...img } /> )
                    }
                </div>

            </div>
            
        </div>
    )
}

export default GifGrid
