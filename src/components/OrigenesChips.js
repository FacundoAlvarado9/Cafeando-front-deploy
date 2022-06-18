import { Chip } from 'primereact/chip'
import React from 'react'
import { Link } from 'react-router-dom'

import './styles/error.css'

class OrigenesChips extends React.Component {

    render(){
        return(<>
            <div className="flex flex-row justify-content-center">
                { this.props.variedad["origenes"].map(origen =>
                    <Link to={"/origenes/" + origen.id} key={origen.id}><Chip label={origen.nombre} /></Link>
                ) }
            </div>
        </>)
    }
}

export default OrigenesChips