import React from 'react'
import {Link} from 'react-router-dom'

class TostaduriaCard extends React.Component {

    render(){
        return(<>
            <div className="tostaduria-card">
                <Link to={"" + this.props.id }>{ this.props.nombre }</Link>
                <p>{ this.props.id }</p>
            </div>                
        </>)
    }
}

export default TostaduriaCard
