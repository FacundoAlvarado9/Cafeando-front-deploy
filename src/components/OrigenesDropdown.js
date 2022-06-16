import { getAllOrigenes } from 'network/lib/origenes'
import React from 'react'

import { Dropdown } from 'primereact/dropdown'

class OrigenesDropdown extends React.Component {

    state = {
        origen: null,
        origenes: []
    }

    componentDidMount(){
        getAllOrigenes().then(res => {
            this.setState({
                origenes: res.data["results"]
            })
        })
    }

    handleChange = event =>{
        this.setState({
            origen: event
        })
        this.props.onChange(event)
    }

    render(){
        return(
            <>                
            <Dropdown optionLabel="nombre" optionValue="id" value={this.state.origen} options={this.state.origenes} onChange={(e) => this.handleChange(e.value)} placeholder="Filtrar por origen"/>
            </>
                 
        )
    }
}

export default OrigenesDropdown