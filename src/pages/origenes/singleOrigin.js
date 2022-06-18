import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'

import { getVariedadesFromOrigen } from "network/lib/variedades"
import VariedadCard from 'components/cards/VariedadCard'
import Search from 'components/Search'

import { Button } from 'primereact/button'
import { getSingleOrigin } from 'network/lib/origenes'
import TostaduriaDropdown from 'components/TostaduriasDropdown'
import { Paginator } from 'primereact/paginator';
import VariedadGrid from 'components/VariedadGrid'

export default function SingleOrigin() {
  
  const [origen, setOrigen] = useState({})
  const [variedades, setVariedades] = useState([])

  const [pageCount, setPageCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)

  const [filters, setFilters] = useState({
    pageSize: 5,
    startIndex: 0,
    searchString: "",    
    tostaduria: null
  })

  const [errored, setErrored] = useState(false)

  const { origen_id }= useParams()

  useEffect(() => {         
    getSingleOrigin(origen_id).then(res => {
      setOrigen(res.data["results"][0])      
    }).catch((error) => {
      setErrored(true)
    })
  }, [origen_id])

  useEffect(() => {         
    getVariedadesFromOrigen(origen_id, filters).then(resVariedades => {
      setVariedades(resVariedades.data["results"])
      setTotalCount(resVariedades.data["totalCount"])
      setPageCount(Math.ceil(resVariedades.data["totalCount"] / filters["pageSize"]))
    }).catch((error) => {
      setErrored(true)
    })
  }, [origen_id, filters])

  /* const handlePageClick = (event) => {
    const newOffset = (event.selected * filters["pageSize"]) % totalCount
    setFilters({
      ...filters,
      startIndex: newOffset
    })
  } */

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

  const changeTostaduriaFilter = (newTostaduria) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      tostaduria: newTostaduria
    }))
  }

  const showVariedades = <>
      <div className='flex flex-column'>    
        <div className='flex flex-column md:flex-row gap-0 md:gap-3 justify-content-center align-items-center'>
          <div className="flex">
            <Link to="/origenes" className="link"><Button icon="pi pi-chevron-left" label="Volver"/></Link>
          </div>
          <div className="flex">
            <Search value={filters["searchString"]} onChange={changeSearchString} name="texto" placeholder="Buscar"/>
          </div>
          <div className="flex">
            <TostaduriaDropdown onChange={changeTostaduriaFilter} />
          </div>                            
        </div>
        <VariedadGrid variedades={variedades} 
            titulo={ origen["nombre"] } 
            descripcion={origen["descripcion"]}
            startIndex={filters["startIndex"]}
            pageSize={filters["pageSize"]}
            totalCount={totalCount}
            onPageChange={handlePageClick}
            />                  
      </div> 
    </>

  const backup = <>
    <div className='flex flex-column'>
          <h1>{ origen["nombre"] }</h1>
          <p>{ origen["descripcion"] }</p>
          <div className="grid gap-3 justify-content-center">
              {variedades.map(variedad => {          
                return <VariedadCard variedad={variedad} key={variedad["id"]}/>
              })}            
          </div>
          <div>
            <Paginator first={filters["startIndex"]} rows={filters["pageSize"]} totalRecords={totalCount} onPageChange={handlePageClick}></Paginator>
          </div>
        </div> 
  </>
    
  let result;
  if(!errored){
    result = showVariedades        
  } else{
    result = <p>Upps!</p>
  }

  console.log("startIndex: " + filters["startIndex"])
  console.log("pageCount: " + pageCount)

  return(    
    result
  )
}