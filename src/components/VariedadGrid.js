import React from 'react'

import VariedadCard from './cards/VariedadCard'
import { Paginator } from 'primereact/paginator';

class VariedadGrid extends React.Component {

    render(){        
        return(
            <div className='flex flex-column'>
                <h1>{ this.props.titulo }</h1>
                <p>{ this.props.descripcion }</p>
                <div className="grid gap-3 justify-content-center">
                    {this.props.variedades.map(variedad => {          
                    return <VariedadCard variedad={variedad} key={variedad["id"]}/>
                    })}            
                </div>
                <div>
                    <Paginator first={this.props.startIndex} rows={this.props.pageSize} totalRecords={this.props.totalCount} rowsPerPageOptions={[2,3,5]} onPageChange={this.props.onPageChange}></Paginator>
                </div>
            </div>
        )
    }
}

export default VariedadGrid
