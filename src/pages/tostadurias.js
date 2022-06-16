import React from 'react'

import { getAllTostadurias } from "network/lib/tostadurias"
import TostaduriaCard from 'components/cards/TostaduriaCard'

class Tostadurias extends React.Component {
    state = {
      tostadurias: []
    }

    componentDidMount() {
      getAllTostadurias().then(res => {
        this.setState({ tostadurias: res.data.results })
      })
    }

    render(){
        return(<>
        <h1>Tostadurias 🏪</h1>
        <div className='grid gap-3 justify-content-center'>
          {this.state.tostadurias.map(tostaduria => <TostaduriaCard id={tostaduria.id} key={tostaduria.id} nombre={tostaduria.nombre}/>)}
        </div>
        </>)
    }
}

export default Tostadurias