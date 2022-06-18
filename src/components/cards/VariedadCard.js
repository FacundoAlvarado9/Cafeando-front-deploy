import React from 'react'

import { Card } from 'primereact/card'
import { Link } from 'react-router-dom'
import OrigenesChips from 'components/OrigenesChips'

import './card.css'

class VariedadCard extends React.Component {

    render(){
        const header = <img src={this.props.variedad["imagen_url"]} alt="Variedad preview" />
        const tostaduria = <Link className='cardLink' to={"/tostadurias/" + this.props.variedad["tostaduria"]["id"]}>{this.props.variedad["tostaduria"]["nombre"]}</Link>
        const title = <Link className='cardLink' to={"/variedades/" + this.props.variedad["id"]}>{this.props.variedad["nombre"]}</Link>
        return(
            <Card title={title} 
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

                        <OrigenesChips variedad={this.props.variedad} />
                    
                    </div>                    

            </Card>
        )
    }
}

export default VariedadCard
