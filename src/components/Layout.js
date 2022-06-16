import React from "react"
import { Outlet } from "react-router-dom"

import Navbar from "./Navbar"

class Layout extends React.Component {

    render(){
        return(<>            
            <div className="content flex flex-column">   
                <Navbar />
                <main>
                    <Outlet />  
                </main>                  
            </div>
        </>)
    }    

}

export default Layout