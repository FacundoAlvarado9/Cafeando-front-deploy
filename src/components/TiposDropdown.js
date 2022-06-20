import React from 'react'

import { Dropdown } from 'primereact/dropdown'
import { getAllTipos } from 'network/lib/tipos'

class TiposDropdown extends React.Component {

    state = {
        tipo: null,
        tipos: []
    }

    componentDidMount(){
        getAllTipos().then(res => {
            this.setState({
                tipos: res.data["results"]
            })
        })
    }

    handleChange = event =>{
        this.setState({
            tipo: event
        })
        this.props.onChange(event)
    }

    render(){
        return(
            <>                
            <Dropdown showClear optionLabel="nombre" optionValue="id" value={this.state.tipo} options={this.state.tipos} onChange={(e) => this.handleChange(e.value)} placeholder="Filtrar por tipo"/>
            </>
                 
        )
    }
}

export default TiposDropdown