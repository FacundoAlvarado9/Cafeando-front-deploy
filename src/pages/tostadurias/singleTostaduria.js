import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'

import { getVariedadesFromTostaduria } from "network/lib/variedades"
import VariedadCard from 'components/cards/VariedadCard'
import Search from 'components/Search'
import { getSingleTostaduria, getSucursalesFromSingleTostaduria } from 'network/lib/tostadurias'
import OrigenesDropdown from 'components/OrigenesDropdown'

import { Button } from 'primereact/button'
import SucursalCard from 'components/cards/SucursalCard'
import VariedadGrid from 'components/VariedadGrid'

export default function SingleTostaduria() {
  
  const [tostaduria, setTostaduria] = useState([])
  const [variedades, setVariedades] = useState([])
  const [sucursales, setSucursales] = useState([])

  const [totalCount, setTotalCount] = useState(0)

  const [filters, setFilters] = useState({
    pageSize: 5,
    startIndex: 0,
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
  }, [tost_id])

  useEffect(() => {         
    getVariedadesFromTostaduria(tost_id, filters).then(resVariedades => {
      setVariedades(resVariedades.data["results"])
      setTotalCount(resVariedades.data["totalCount"])
    })    
  }, [filters, tost_id])

  const handlePageClick = (event) => {
    setFilters({
      ...filters,
      startIndex: event.first,
      pageSize: event.rows
    })
  }

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
  console.log("total count: " + totalCount)

  const backup = <>
    <div className='flex flex-column'>
            <h1>{ tostaduria.nombre }</h1>
            <div className="grid gap-3 justify-content-center">
                {variedades.map(variedad => {          
                  return <VariedadCard variedad={variedad} key={variedad["id"]}/>
                })}
            </div> 
          </div> 
  </>

  return(
    <div className='flex flex-column'>
      <div className='flex flex-column md:flex-row gap-0 md:gap-3 justify-content-center align-items-center'>
        <div className="flex">
          <Link to="/tostadurias"><Button icon="pi pi-chevron-left" label="Volver"/></Link>
        </div>
        <div className="flex">
          <Search value={filters["searchString"]} onChange={changeSearchString} name="texto" placeholder="Buscar"/>
        </div>
        <div className="flex">
          <OrigenesDropdown onChange={changeOrigenFilter} />
        </div>                    
      </div>

         <VariedadGrid variedades={variedades}
              titulo={ tostaduria["nombre"] }
              startIndex={ filters["startIndex"] }
              pageSize={ filters["pageSize"] }
              totalCount={totalCount}
              onPageChange={handlePageClick}
         />
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