import React from 'react'

import './styles/error.css'

class Loading extends React.Component {

    render(){
        return(<>
            <div className="flex flex-column justify-content-center align-items-center">
                <i className="pi pi-spin pi-spinner" style={{'fontSize': '2em'}}></i>
            </div>
        </>)
    }
}

export default Loading