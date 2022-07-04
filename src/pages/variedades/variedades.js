import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import { getAllVariedades} from "network/lib/variedades"
import Search from 'components/Search'
import OrigenesDropdown from 'components/OrigenesDropdown'

import { Button } from 'primereact/button'
import VariedadGrid from 'components/VariedadGrid'
import Error from 'components/Error'
import TostaduriaDropdown from 'components/TostaduriasDropdown'
import TiposDropdown from 'components/TiposDropdown'
import Loading from 'components/Loading'

export default function Variedades() {
  
  const [variedades, setVariedades] = useState([])

  const [totalCount, setTotalCount] = useState(0)

  const [filters, setFilters] = useState({
    pageSize: 5,
    startIndex: 0,
    searchString: "",
    origen: null,
    tostaduria: null,
    tipo: null
  })
  const [errored, setErrored] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {    
    getAllVariedades(filters).then(resVariedades => {
      setVariedades(resVariedades.data["results"])
      setTotalCount(resVariedades.data["totalCount"])
      setLoading(false)
    }).catch((error) => {
      setErrored(true)
      setLoading(false)
    })
  }, [filters])

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

  const changeTostaduriaFilter = (newTostaduria) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      tostaduria: newTostaduria
    }))
  }

  const changeTipoFilter = (newTipo) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      tipo: newTipo
    }))
  }

  const mostrarVariedades = <>
      <div className='flex flex-column'>
        <div className='flex flex-column md:flex-row gap-0 md:gap-3 justify-content-center align-items-center'>
          <div className="flex">
            <Link to="/" className="link"><Button icon="pi pi-chevron-left" label="Volver"/></Link>
          </div>
          <div className="flex">
            <Search value={filters["searchString"]} onChange={changeSearchString} name="texto" placeholder="Buscar"/>
          </div>
          <div className="flex">
            <OrigenesDropdown onChange={changeOrigenFilter} />
          </div>
          <div className="flex">
            <TostaduriaDropdown onChange={changeTostaduriaFilter} />
          </div>
          <div className="flex">
            <TiposDropdown onChange={changeTipoFilter} />
          </div>   
        </div>
          {loading ? (<Loading />) : (
            <VariedadGrid variedades={variedades}
                  titulo="Todas las variedades"
                  startIndex={ filters["startIndex"] }
                  pageSize={ filters["pageSize"] }
                  totalCount={totalCount}
                  onPageChange={handlePageClick}
            />
          )}
      </div>
  </>

  let result

  if(!errored){
    result = mostrarVariedades
  } else {
    result = <Error volver="/" />
  }


  return(
    result
  )
}