import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles/navbar.css'

class Navbar extends React.Component {
    render(){
        return(
            <>
                <div className="navbar flex flex-column md:flex-row md:rojo align-items-center justify-content-between">
                    <div className="flex title">
                        <NavLink className="navLink" to="/"><p>Cafeando</p></NavLink> 
                    </div>
                    <div className="flex links">
                        <nav className="flex nav-navbar gap-3">
                            <div className='flex'>
                                <NavLink className="navLink" to="variedades">Variedades</NavLink> 
                            </div>  
                            <div className='flex'>
                                <NavLink className="navLink" to="tostadurias">Tostadurías</NavLink>
                            </div>
                            <div className='flex'>
                                <NavLink className="navLink" to="origenes">Orígenes</NavLink> 
                            </div>                                                    
                        </nav>
                    </div>                    
                </div> 
            </>
                 
        )
    }
}

export default Navbar