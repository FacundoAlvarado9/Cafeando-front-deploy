import React from 'react'

class Search extends React.Component {

    handleChange = event =>{
        this.props.onChange(event.target.value)
    }

    render(){
        return(
            <>
                <input type="text" 
                name={this.props.name} 
                id={this.props.id} 
                value={this.props.value} 
                placeholder={this.props.placeholder}
                onChange={this.handleChange}/>
            </>
                 
        )
    }
}

export default Search