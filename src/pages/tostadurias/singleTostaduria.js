import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import { getVariedadesFromTostaduria } from "network/lib/variedades"
import VariedadCard from 'components/cards/VariedadCard'
import Search from 'components/Search'
import { getSingleTostaduria } from 'network/lib/tostadurias'
import OrigenesDropdown from 'components/OrigenesDropdown'

export default function SingleTostaduria() {
  
  const [tostaduria, setTostaduria] = useState([])
  const [variedades, setVariedades] = useState([])

  const [filters, setFilters] = useState({
    searchString: "",
    origen: null
  })

  const { tost_id }= useParams()

  useEffect(() => {         
    getSingleTostaduria(tost_id).then(res => {
      setTostaduria(res.data["results"][0])
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
    <div>    
     <Search value={filters["searchString"]} onChange={changeSearchString} name="texto" placeholder="searchString"/>
     <OrigenesDropdown onChange={changeOrigenFilter} />
      <h1>{ tostaduria.nombre }</h1>
      <ul>
        {variedades.map(variedad => {          
          return <li key={variedad.id}>{variedad.nombre}</li>
        })}
      </ul>
    </div>
  )
}