import React from 'react'

class VariedadCard extends React.Component {

    render(){
        return(<>
            <div className="tostaduria-card">
                <img src={this.props.variedad["imagen_url"]} alt="Variedad preview" />
                <h2>{ this.props.variedad["nombre"] }</h2>
                <p>{ this.props.variedad["descripcion"] }</p>
                <ul>
                    { this.props.variedad["origenes"].map(origen =>
                        <li key={origen.id}> { origen.nombre } </li>
                    ) }
                </ul>
            </div>                
        </>)
    }
}

export default VariedadCard
