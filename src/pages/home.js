import React from 'react'

import './home.css'

class Home extends React.Component {

    render(){
        return(<>
            <div className="main">
                <img src="https://cafeando-bucket.s3.sa-east-1.amazonaws.com/illustrations/mug-spill.png" alt="" />
                <div className="centered main-title">
                    <h1>Remando en <strike><i>dulce de leche</i></strike> café.</h1>
                </div>                
            </div>
            <div className="data data2">
                <div className="title">
                    <h2>Conectate con las tostadurías de Argentina. Desde casa.</h2>
                </div>
                <div className="info">
                    <p><i>Cafeando</i> es el <u>primer</u> hub de café de especialidad en el país.</p>
                    <img src="https://cafeando-bucket.s3.sa-east-1.amazonaws.com/illustrations/man-at-home.png" alt="" />
                </div>
            </div>
            <div className="data">
                <div className="title">
                    <img src="https://cafeando-bucket.s3.sa-east-1.amazonaws.com/illustrations/italian-gesture.png" alt="" />
                    <h2>¿Café de especialidad?</h2>
                </div>
                <div className="info">
                    <p>Formalmente es el café con un puntaje de más de 80 puntos de la <a href="https://sca.coffee/">SCA</a>.</p>
                    <p>Pero también así se le llama a la cultura de beber café <b>consciente de su cadena de producción</b>.</p>
                    <p>Esto es, de variables como su origen, especie, tratamiento post-recolección, grado de tostado, método de preparación, etc.</p>
                </div>
            </div>
            <div className="footer flex flex-row gap-5   justify-content-center align-items-center">
                <p>Creado por Facundo Alvarado para IAW @ UNS 2022</p>
                <p>Ilustraciones de <a href="https://icons8.com/github-students">Icons8 - GitHub Student</a></p>
            </div>          
        </>)
    }
}

export default Home