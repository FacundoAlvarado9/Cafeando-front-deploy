import React, {useState, useEffect} from 'react'

import { getAllTostadurias } from "network/lib/tostadurias"
import TostaduriaCard from 'components/cards/TostaduriaCard'
import { Paginator } from 'primereact/paginator'
import Search from 'components/Search'
import Error from 'components/Error'
import NoResults from 'components/NoResults'
import Loading from 'components/Loading'

export default function Tostadurias(){
  const [tostadurias, setTostadurias] = useState([])

  const [totalCount, setTotalCount] = useState(0)

  const [filters, setFilters] = useState({    
    pageSize: 5,
    startIndex: 0,
    searchString: "",
  })
  const [errored, setErrored] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllTostadurias(filters).then(res => {
      setTostadurias(res.data.results)
      setTotalCount(res.data["totalCount"])
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
    setFilters({
      ...filters,
      searchString: newSearchString
    })
  }

  const mostrarTostadurias = <>
      <div className="flex flex-column gap-3">
          <div className="flex justify-content-center">
            <Search value={filters["searchString"]} onChange={changeSearchString} name="texto" placeholder="Buscar"/>
          </div>
          {loading ? (<Loading />) :
          <>
            <div className='flex flex-column grid gap-3 justify-content-center'> 
              {tostadurias.length === 0 ? (<NoResults />) : tostadurias.map(tostaduria => <TostaduriaCard id={tostaduria.id} key={tostaduria.id} nombre={tostaduria.nombre}/>)}        
            </div>
            <div className="flex justify-content-center">
              <Paginator first={filters["startIndex"]} rows={filters["pageSize"]} totalRecords={totalCount} rowsPerPageOptions={[2,3,5]} onPageChange={handlePageClick}/>
            </div>
          </>
          }
      </div>
  </>

  let resultado
  if(!errored){
    resultado = mostrarTostadurias
  } else{
    resultado = <Error volver="/" />
  }

  return(<>
  <div className="flex flex-column">
    <h1>Tostadurias 🏪</h1> 
    {resultado}   
  </div>
    
    </>)
}