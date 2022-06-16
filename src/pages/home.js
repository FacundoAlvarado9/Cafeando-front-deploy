import React from 'react'

class Home extends React.Component {

    componentDidMount(){
        document.title = "Cafeando"
    }

    render(){
        return(<>
        <h1>Bienvenidos 👋☕</h1>
        <h2>Estamos en construcción (👷‍♂️) aún</h2>
        <p>(Instalé un plugin de emojis y estoy obsesionado)</p>        
        </>)
    }
}

export default Home