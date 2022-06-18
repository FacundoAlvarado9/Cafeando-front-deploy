import React from 'react'

import VariedadCard from './cards/VariedadCard'
import { Paginator } from 'primereact/paginator';
import NoResults from './NoResults';

class VariedadGrid extends React.Component {

    render(){
        let renderVariedades = (variedades) => {
            return variedades.map((variedad, i) => renderVariedad(variedad, i))
        }

        let renderVariedad = (variedad, i) => {
            return(<VariedadCard variedad={variedad} key={i}/>)
        }

        return(
            <div className='flex flex-column gap-5'>
                <h1>{ this.props.titulo }</h1>
                <p>{ this.props.descripcion }</p>
                <div className="flex grid gap-3 justify-content-center">
                    {this.props.variedades.length === 0 ? (<NoResults />) : renderVariedades(this.props.variedades)}            
                </div>
                <div className='flex justify-content-center'>
                    <Paginator  first={this.props.startIndex} rows={this.props.pageSize} totalRecords={this.props.totalCount} rowsPerPageOptions={[2,3,5]} onPageChange={this.props.onPageChange}></Paginator>
                </div>
            </div>
        )
    }
}

export default VariedadGrid
