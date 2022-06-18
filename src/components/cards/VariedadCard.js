import React from 'react'

import { Card } from 'primereact/card'
import { Chip } from 'primereact/chip'
import card from './card.module.css'
import { Link } from 'react-router-dom'

class VariedadCard extends React.Component {

    render(){
        const header = <img src={this.props.variedad["imagen_url"]} alt="Variedad preview" />
        const tostaduria = <Link to={"/tostadurias/" + this.props.variedad["tostaduria"]["id"]}>{this.props.variedad["tostaduria"]["nombre"]}</Link>
        return(
            <Card title={this.props.variedad["nombre"]} 
                    subTitle={tostaduria} 
                    id={this.props.variedad["id"]}
                    header={header}
                    className="max-w-20rem col-12">

                    <div className='flex flex-column '>
                        <div className="flex justify-content-center">
                            <p><i>{this.props.variedad["tipo"]["nombre"]}</i></p>
                        </div>
                        
                        <div className="overflow-scroll">
                            <p>{this.props.variedad["descripcion"]}</p>
                        </div>

                        <div className="flex flex-row justify-content-center">
                            { this.props.variedad["origenes"].map(origen =>
                                <Link to={"/origenes/" + origen.id} key={origen.id}><Chip label={origen.nombre} /></Link>
                            ) }
                        </div>
                    
                    </div>                    

            </Card>
        )
    }
}

export default VariedadCard
