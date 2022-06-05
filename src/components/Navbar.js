import React from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

class Navbar extends React.Component {
    render(){
        return(
            <>
                <div className="hola">
                <nav className="navbar">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/tostadurias">Tostadurías</NavLink>                                                  
                </nav>
                </div> 
            </>
                 
        )
    }
}

export default Navbar