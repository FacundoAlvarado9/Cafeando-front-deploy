import React from 'react'

import { Dropdown } from 'primereact/dropdown'
import { getAllTostadurias } from 'network/lib/tostadurias'

class TostaduriaDropdown extends React.Component {

    state = {
        tostaduria: null,
        tostadurias: []
    }

    componentDidMount(){
        getAllTostadurias().then(res => {
            this.setState({
                tostadurias: res.data["results"]
            })
        })
    }

    handleChange = event =>{
        this.setState({
            tostaduria: event
        })
        this.props.onChange(event)
    }

    render(){
        return(
            <>                
            <Dropdown showClear optionLabel="nombre" optionValue="id" value={this.state.tostaduria} options={this.state.tostadurias} onChange={(e) => this.handleChange(e.value)} placeholder="Filtrar por tostaduria"/>
            </>
                 
        )
    }
}

export default TostaduriaDropdown