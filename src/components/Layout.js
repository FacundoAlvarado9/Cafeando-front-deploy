import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"

//import Navbar from "./Navbar"
import Navbar from "./Navbar"

import './styles/layout.css'

class Layout extends React.Component {

    render(){
        return(<>
            <div className="layout flex flex-column">
                <div className="">
                    <Navbar/>
                </div>
                <div className="layout-content">
                    <Outlet />                  
                </div>
            </div>            
        </>)
    }    

}

export default Layout