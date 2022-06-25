import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { getVariedadesFromTostaduria } from "network/lib/variedades"
import { getSingleTostaduria, getSucursalesFromSingleTostaduria } from 'network/lib/tostadurias'

import { Button } from 'primereact/button'

import Loading from 'components/Loading'
import Search from 'components/Search'
import OrigenesDropdown from 'components/OrigenesDropdown'
import SucursalCard from 'components/cards/SucursalCard'
import VariedadGrid from 'components/VariedadGrid'
import Error from 'components/Error'
import TiposDropdown from 'components/TiposDropdown'
import SucursalesMap from 'components/SucursalesMap'

export default function SingleTostaduria() {
  
  const [tostaduria, setTostaduria] = useState([])
  const [variedades, setVariedades] = useState([])
  const [sucursales, setSucursales] = useState([])

  const [totalCount, setTotalCount] = useState(0)

  const [filters, setFilters] = useState({
    pageSize: 5,
    startIndex: 0,
    searchString: "",
    origen: null,
    tipo: null
  })

  const [loadingTostInfo, setLoadingTostInfo] = useState(true)
  const [loadingVariedades, setLoadingVariedades] = useState(true)
  const [loadingSucursales, setLoadingSucursales] = useState(true)
  const [errored, setErrored] = useState(false)

  const { tost_id }= useParams()

  useEffect(() => {
    setLoadingTostInfo(true)
    setLoadingSucursales(true)

    getSingleTostaduria(tost_id).then(res => {
      setTostaduria(res.data["results"][0])
      setLoadingTostInfo(false)
    }).catch((error) => {
      setErrored(true)
      setLoadingTostInfo(false)
    })

    getSucursalesFromSingleTostaduria(tost_id).then(res => {
      setSucursales(res.data["results"])
      setLoadingSucursales(false)
    }).catch((error) => {
      setErrored(true)
      setLoadingSucursales(false)
    })
  }, [tost_id])

  useEffect(() => {
    setLoadingVariedades(true)
    
    getVariedadesFromTostaduria(tost_id, filters).then(resVariedades => {
      setVariedades(resVariedades.data["results"])
      setTotalCount(resVariedades.data["totalCount"])
      setLoadingVariedades(false)
    }).catch((error) => {
      setErrored(true)
      setLoadingVariedades(false)
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

  const changeTipoFilter = (newTipo) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      tipo: newTipo
    }))
  }

  const navigate = useNavigate()

  const mostrarVariedadesTostaduria = <>
      <div className='flex flex-column'>
        <div className='flex flex-column md:flex-row gap-0 md:gap-3 justify-content-center align-items-center'>
          <div className="flex link">
            <Button icon="pi pi-chevron-left" onClick={() => navigate(-1)} label="Volver"/>
          </div>
          <div className="flex">
            <Search value={filters["searchString"]} onChange={changeSearchString} name="texto" placeholder="Buscar"/>
          </div>
          <div className="flex">
            <OrigenesDropdown onChange={changeOrigenFilter} />
          </div>
          <div className="flex">
            <TiposDropdown onChange={changeTipoFilter} />
          </div>   
        </div>
            <VariedadGrid variedades={variedades}
                  titulo={ tostaduria["nombre"] }
                  startIndex={ filters["startIndex"] }
                  pageSize={ filters["pageSize"] }
                  totalCount={totalCount}
                  onPageChange={handlePageClick}
                  loadingTitle={loadingTostInfo}
                  loadingVariedades={loadingVariedades}
            />
        <div className='flex flex-column gap-5'>
          <h2>Sucursales</h2>
          <div className="grid gap-3 justify-content-center">
              {loadingSucursales ? (<Loading />) : 
                sucursales.map(sucursal => {          
                  return <SucursalCard sucursal={sucursal} key={sucursal["id"]}/>
                })
              }
          </div>
          <div className="justify-content-center flex">
            <SucursalesMap sucursales={sucursales}/>
          </div>          
        </div>                   

      </div>
  </>

  let result

  if(!errored){
    result = mostrarVariedadesTostaduria
  } else {
    result = <Error volver="/tostadurias" />
  }


  return(
    result
  )
}