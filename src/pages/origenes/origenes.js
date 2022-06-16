import React from 'react'

import { getAllOrigenes } from 'network/lib/origenes'
import OrigenCard from 'components/cards/OrigenCard'

class Origenes extends React.Component {
    state = {
      origenes: []
    }

    componentDidMount() {
      getAllOrigenes().then(res => {
        this.setState({ origenes: res.data.results })
      })
    }

    render(){
        return(<>
        <h1>Origenes 📌</h1>
        <div className='grid gap-3 justify-content-center'>
          {this.state.origenes.map(origen => <OrigenCard id={origen.id} key={origen.id} origen={origen}/>)}
        </div>
        </>)
    }
}

export default Origenes