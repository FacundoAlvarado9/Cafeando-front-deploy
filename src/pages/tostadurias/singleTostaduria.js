import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'

import { getVariedadesFromTostaduria } from "network/lib/variedades"
import VariedadCard from 'components/cards/VariedadCard'
import Search from 'components/Search'
import { getSingleTostaduria, getSucursalesFromSingleTostaduria } from 'network/lib/tostadurias'
import OrigenesDropdown from 'components/OrigenesDropdown'

import { Button } from 'primereact/button'
import SucursalCard from 'components/cards/SucursalCard'

export default function SingleTostaduria() {
  
  const [tostaduria, setTostaduria] = useState([])
  const [variedades, setVariedades] = useState([])
  const [sucursales, setSucursales] = useState([])

  const [filters, setFilters] = useState({
    searchString: "",
    origen: null
  })

  const { tost_id }= useParams()

  useEffect(() => {         
    getSingleTostaduria(tost_id).then(res => {
      setTostaduria(res.data["results"][0])
    }) 

    getSucursalesFromSingleTostaduria(tost_id).then(res => {
      setSucursales(res.data["results"])
    }) 
  }, [])

  useEffect(() => {         
    getVariedadesFromTostaduria(tost_id, filters).then(resVariedades => {
      setVariedades(resVariedades.data["results"])
    })    
  }, [filters])

  const changeSearchString = (newSearchString) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      searchString: newSearchString
    }))
  }

  const changeOrigenFilter = (newOrigen) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      origen: newOrigen
    }))
  }

  return(
    <div className='flex flex-column'>
      <div className='flex flex-row'>
        <Link to="/tostadurias"><Button icon="pi pi-chevron-left" label="Volver"/></Link>
        <Search value={filters["searchString"]} onChange={changeSearchString} name="texto" placeholder="Buscar"/>
        <OrigenesDropdown onChange={changeOrigenFilter} />
      </div>
      <div className='flex flex-column'>
        <h1>{ tostaduria.nombre }</h1>
        <div className="grid gap-3 justify-content-center">
            {variedades.map(variedad => {          
              return <VariedadCard variedad={variedad} key={variedad["id"]}/>
            })}
        </div> 
      </div>    
      <div className='flex flex-column'>
        <h2>Sucursales</h2>
        <div className="grid gap-3 justify-content-center">
            {sucursales.map(sucursal => {          
              return <SucursalCard sucursal={sucursal} key={sucursal["id"]}/>
            })}
        </div> 
      </div>       
    </div>
  )
}