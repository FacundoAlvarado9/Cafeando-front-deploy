import React from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'primereact/card'

import './card.css'

class TostaduriaCard extends React.Component {

    render(){
        const header = <Link className='cardLink' to={"" + this.props.id }><h2>{ this.props.nombre }</h2></Link>
        return(<>                
            <Card className="flex justify-content-center" title={header}/>              
        </>)
    }
}

export default TostaduriaCard
