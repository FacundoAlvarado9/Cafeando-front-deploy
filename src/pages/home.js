import React from 'react'

import './home.css'

class Home extends React.Component {

    componentDidMount(){
        document.title = "Cafeando"
    }

    render(){
        return(<>
            <div className="main">
                <img src="https://cafeando-bucket.s3.sa-east-1.amazonaws.com/illustrations/mug-spill.png" alt="" />
                <div className="centered main-title">
                    <h1>Remando en <strike><i>dulce de leche</i></strike> café.</h1>
                </div>                
            </div>
            <div className="data">
                <div className="title">
                    <h2>Conectate con las tostadurías de Argentina. Desde casa.</h2>
                </div>
                <div className="info">
                    <p><i>Cafeando</i> es el <u>primer</u> hub de café de especialidad en el país.</p>
                    <img src="https://cafeando-bucket.s3.sa-east-1.amazonaws.com/illustrations/man-at-home.png" alt="" />
                </div>
            </div>
        </>)
    }
}

export default Home