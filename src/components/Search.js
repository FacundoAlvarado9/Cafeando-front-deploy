import React from 'react'

import {InputText} from 'primereact/inputtext'
import {Button} from 'primereact/button'

class Search extends React.Component {

    state = {
        searchString: ""
    }

    handleChange = event =>{        
        this.props.onChange(this.state.searchString)
    }

    handleKeyDown = event =>{
        if(event.key === 'Enter' ){
            alert("Holaa")
            this.handleChange()
        }
    }

    render(){
        return(
            <>

            <div className="p-inputgroup">
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