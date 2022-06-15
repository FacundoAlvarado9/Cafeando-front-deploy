import React from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends React.Component {
    render(){
        return(
            <>
                <div className="hola">
                <nav className="navbar">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="tostadurias">Tostadurías</NavLink>                                                  
                </nav>
                </div> 
            </>
                 
        )
    }
}

export default Navbar