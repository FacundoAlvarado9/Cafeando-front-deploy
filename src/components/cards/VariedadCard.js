import React from 'react'

import { Card } from 'primereact/card'
import { Chip } from 'primereact/chip'
import card from './card.module.css'
import { Link } from 'react-router-dom'

class VariedadCard extends React.Component {

    render(){
        const header = <img src={this.props.variedad["imagen_url"]} alt="Variedad preview" />
        return(
            <Card title={this.props.variedad["nombre"]} 
                    subTitle={this.props.variedad["descripcion"]} 
                    id={this.props.variedad["id"]}
                    header={header}
                    className="max-w-20rem col-12">

                    { this.props.variedad["origenes"].map(origen =>
                        <Link to="http://google.com"><Chip label={origen.nombre} key={origen.id}/></Link>
                    ) }

            </Card>
        )
    }
}

export default VariedadCard
