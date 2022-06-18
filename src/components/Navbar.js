import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles/navbar.css'

class Navbar extends React.Component {
    render(){
        return(
            <>
                <div className="navbar flex align-items-center justify-content-between">
                    <div className="title">
                        <p>Cafeando</p>
                    </div>
                    <div className="links">
                        <nav className="flex nav-navbar gap-3">
                            <div className='flex'>
                                <NavLink className="link" to="/">Home</NavLink>                                
                            </div>
                            <div className='flex'>
                                <NavLink className="link" to="variedades">Variedades</NavLink> 
                            </div>  
                            <div className='flex'>
                                <NavLink className="link" to="tostadurias">Tostadurías</NavLink>
                            </div>
                            <div className='flex'>
                                <NavLink className="link" to="origenes">Orígenes</NavLink> 
                            </div>                                                    
                        </nav>
                    </div>                    
                </div> 
            </>
                 
        )
    }
}

export default Navbar