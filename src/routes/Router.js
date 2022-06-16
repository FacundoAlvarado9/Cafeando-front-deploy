import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from 'pages/home'
import Tostadurias from 'pages/tostadurias'
import SingleTostaduria from 'pages/tostadurias/singleTostaduria'
import Layout from 'components/Layout'
import Origenes from 'pages/origenes/origenes'
import SingleOrigin from 'pages/origenes/singleOrigin'

const Routers = () => {
    return(
        <Routes>
            <Route path="/" element={ <Layout/> }>
                <Route index element={ <Home/> } />
                <Route path="tostadurias" element={ <Tostadurias /> } />            
                <Route path="tostadurias/:tost_id" element={ <SingleTostaduria nombre="holiwis"/> } />
                <Route path="origenes" element={ <Origenes /> } />
                <Route path="origenes/:origen_id" element={ <SingleOrigin nombre="holiwis"/> } />
            </Route>            
        </Routes>    
    )
}

export default Routers