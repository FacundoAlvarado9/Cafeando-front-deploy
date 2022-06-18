import React from 'react'

import './notfound.css'

class NotFound extends React.Component {

    render(){
        return(<>
            <div className="error flex flex-column md:flex-row justify-content-center align-items-center">
                <img src="https://cafeando-bucket.s3.sa-east-1.amazonaws.com/illustrations/404.png" alt="" />
                <p>¡Ups! No hemos encontrado lo que buscabas.</p>
            </div>
        </>)
    }
}

export default NotFound