import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import { getVariedadesFromTostaduria } from "network/lib/variedades"
import VariedadCard from 'components/cards/VariedadCard'
import Search from 'components/Search'
import { getSingleTostaduria } from 'network/lib/tostadurias'

export default function SingleTostaduria() {
  
  const [tostaduria, setTostaduria] = useState([])
  const [variedades, setVariedades] = useState([])

  const [filters, setFilters] = useState({})

  const { tost_id }= useParams()

  useEffect(() => {   
  
    console.log("hola")

    getSingleTostaduria(tost_id).then(res => {
      setTostaduria(res.data["results"][0])
    })

    getVariedadesFromTostaduria(tost_id, filters).then(resVariedades => {
      setVariedades(resVariedades.data["results"])
      console.log(resVariedades.data["results"])
    })    
  }, [filters])

  // useEffect(() => {
  //   const t = async () => {setFilters({
  //     searchString: "",
  //     origen: 1
  //   })}
  //   t()
  // }, [])

  const changeSearchString = (newSearchString) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      searchString: newSearchString
    }))
  }

  

  return(
    <div>    
     <Search value={filters["searchString"]} onChange={changeSearchString} name="texto" placeholder="searchString"/>
      <h1>{ tostaduria.nombre }</h1>
      <ul>
        {variedades.map(variedad => {          
          return <li key={variedad.id}>{variedad.nombre}</li>
        })}
      </ul>
    </div>
  )
}