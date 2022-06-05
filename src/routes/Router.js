import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

import Home from 'pages/home'
import Tostadurias from 'pages/tostadurias'

const Routers = () => {
    return(
        <Routes>
            <Route path="/" element={ <Navigate to="/home"/> } />
            <Route path="/home" element={ <Home/> } />
            <Route path="/tostadurias" element={ <Tostadurias /> } />
        </Routes>    
    )
}

export default Routers