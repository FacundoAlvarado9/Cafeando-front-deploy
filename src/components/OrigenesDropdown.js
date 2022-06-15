import React from 'react'

class OrigenesDropdown extends React.Component {

    handleChange = event =>{
        this.props.onChange(event.target.value)
    }

    render(){
        return(
            <>
                <label for="origenes">Filtrar por origen:</label>

                <select name="origenes" id="origenes" onChange={this.handleChange}>
                <option> - </option>
                <option value="1">Brasil</option>
                <option value="2">Colombia</option>                
                </select> 
            </>
                 
        )
    }
}

export default OrigenesDropdown