import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'

import { getVariedadesFromOrigen, getVariedadesFromTostaduria } from "network/lib/variedades"
import VariedadCard from 'components/cards/VariedadCard'
import Search from 'components/Search'
import OrigenesDropdown from 'components/OrigenesDropdown'

import { Button } from 'primereact/button'
import { getSingleOrigin } from 'network/lib/origenes'
import TostaduriaDropdown from 'components/TostaduriasDropdown'

export default function SingleOrigin() {
  
  const [origen, setOrigen] = useState([])
  const [variedades, setVariedades] = useState([])

  const [filters, setFilters] = useState({
    searchString: "",
    tostaduria: null
  })

  const { origen_id }= useParams()

  useEffect(() => {         
    getSingleOrigin(origen_id).then(res => {
      setOrigen(res.data["results"][0])
    }) 
  }, [])

  useEffect(() => {         
    getVariedadesFromOrigen(origen_id, filters).then(resVariedades => {
      setVariedades(resVariedades.data["results"])
    })    
  }, [filters])

  const changeSearchString = (newSearchString) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      searchString: newSearchString
    }))
  }

  const changeTostaduriaFilter = (newTostaduria) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      tostaduria: newTostaduria
    }))
  }

  return(
    <div className='flex flex-column'>
      <div className='flex flex-row'>
        <Link to="/origenes"><Button icon="pi pi-chevron-left" label="Volver"/></Link>
        <Search value={filters["searchString"]} onChange={changeSearchString} name="texto" placeholder="Buscar"/>
        <TostaduriaDropdown onChange={changeTostaduriaFilter} />
      </div>
      <div className='flex flex-column'>
        <h1>{ origen.nombre }</h1>
        <div className="grid gap-3 justify-content-center">
            {variedades.map(variedad => {          
              return <VariedadCard variedad={variedad} key={variedad["id"]}/>
            })}
        </div> 
      </div>           
    </div>
  )
}