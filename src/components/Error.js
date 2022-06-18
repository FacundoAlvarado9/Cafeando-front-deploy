import { Button } from 'primereact/button'
import React from 'react'
import { Link } from 'react-router-dom'

import './styles/error.css'

class Error extends React.Component {

    render(){
        return(<>
            <div className="error flex flex-column md:flex-row justify-content-center align-items-center">
                <img src="https://cafeando-bucket.s3.sa-east-1.amazonaws.com/illustrations/tea.png" alt="" />
                <p>¡¿Me están sirviendo té?!</p>
                <p>Debe haber algún problema.</p>
                <p>No pudimos recuperar la info que querías ver :(</p>
                <Link to={this.props.volver}><Button>Volver</Button></Link>
            </div>
        </>)
    }
}

export default Error