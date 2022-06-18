import React from 'react'

import {InputText} from 'primereact/inputtext'
import {Button} from 'primereact/button'

import './styles/search.css'

class Search extends React.Component {

    state = {
        searchString: ""
    }

    handleChange = event =>{        
        this.props.onChange(this.state.searchString)
    }

    handleKeyDown = event =>{
        if(event.key === 'Enter' ){
            this.handleChange()
        }
    }

    render(){
        return(
            <>

            <div className="p-inputgroup search-group">
                <Button label="Buscar" icon="pi pi-search" onClick={this.handleChange}/>
                <InputText
                    id={this.props.id} 
                    defaultValue={this.props.value} 
                    placeholder={this.props.placeholder}
                    onChange={(e) => this.setState({ searchString: e.target.value})}
                    onKeyDown={this.handleKeyDown}
                    />
            </div>                         
            </>
                 
        )
    }
}

export default Search