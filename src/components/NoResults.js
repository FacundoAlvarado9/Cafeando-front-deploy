import { Button } from 'primereact/button'
import React from 'react'
import { Link } from 'react-router-dom'

import './styles/error.css'

class NoResults extends React.Component {

    render(){
        return(<>
            <div className="error flex flex-column justify-content-center align-items-center gap-0">
                <img src="https://cafeando-bucket.s3.sa-east-1.amazonaws.com/illustrations/empty-pot.png" alt="" />
                <p>No hay resultados para tu búsqueda.</p>
                <p>Cafetera vacía.</p>
            </div>
        </>)
    }
}

export default NoResults