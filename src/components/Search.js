import React from 'react'

import {InputText} from 'primereact/inputtext'

class Search extends React.Component {

    handleChange = event =>{
        this.props.onChange(event.target.value)
    }

    render(){
        return(
            <>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                    id={this.props.id} 
                    value={this.props.value} 
                    placeholder={this.props.placeholder}
                    onChange={this.handleChange}/>
            </span>                
            </>
                 
        )
    }
}

export default Search