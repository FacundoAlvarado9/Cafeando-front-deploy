import { getAllOrigenes } from 'network/lib/origenes'
import React from 'react'

class OrigenesDropdown extends React.Component {

    state = {
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
        this.props.onChange(event.target.value)
    }

    render(){
        return(
            <>
                <label htmlFor="origenes">Filtrar por origen:</label>

                <select name="origenes" id="origenes" onChange={this.handleChange}>
                <option> - </option>
                { this.state.origenes.map(origen => {
                    return <option value={origen.id} key={origen.id}> {origen.nombre} </option>
                }) }               
                </select> 
            </>
                 
        )
    }
}

export default OrigenesDropdown