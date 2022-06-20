import React from 'react'

import { Card } from 'primereact/card'

class SucursalCard extends React.Component {

    render(){
        return(
            <Card title={this.props.sucursal["direccion"]} 
                    subTitle={this.props.sucursal["ciudad"]["cod_postal"] + ' - ' + this.props.sucursal["ciudad"]["nombre"]}
                    id={this.props.sucursal["id"]}
                    className="max-w-20rem col-12">                    

            </Card>
        )
    }
}

export default SucursalCard
