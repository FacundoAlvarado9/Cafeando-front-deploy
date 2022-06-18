import React from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'primereact/card'

class OrigenCard extends React.Component {

    render(){
        const header = <Link to={"" + this.props["id"] }><h2>{ this.props.origen["nombre"] }</h2></Link>
        return(<>                
            <Card className="flex justify-content-center" title={header} subTitle={this.props.origen["descripcion"]}/>               
        </>)
    }
}

export default OrigenCard
