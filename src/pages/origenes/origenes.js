import React, {useState, useEffect} from 'react'

import { getAllOrigenes } from 'network/lib/origenes'
import OrigenCard from 'components/cards/OrigenCard'

import { Paginator } from 'primereact/paginator';
import Search from 'components/Search'
import Error from 'components/Error';
import NoResults from 'components/NoResults';
import Loading from 'components/Loading';

export default function Origenes(){

  const [origenes, setOrigenes] = useState([])
  const [totalCount, setTotalCount] = useState(0)
  const [filters, setFilters] = useState({
    pageSize: 5,
    startIndex: 0,
    searchString: ""
  })
  const [errored, setErrored] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getAllOrigenes(filters).then(res => {
      setOrigenes(res.data.results)
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

  const mostrarOrigenes = <>
      <div className="flex flex-column gap-3">
        <div className="flex justify-content-center">
          <Search value={filters["searchString"]} onChange={changeSearchString} name="texto" placeholder="Buscar"/>
        </div>
        <div className='grid flex flex-column gap-3 justify-content-center'>
          {loading ? (<Loading />) : 
          (origenes.length === 0 ? (<NoResults />) : origenes.map(origen => <OrigenCard id={origen.id} key={origen.id} origen={origen}/>))
          }
        </div>
        {(totalCount > filters["pageSize"]) ? (
          <div className='flex justify-content-center'>
            <Paginator first={filters["startIndex"]} rows={filters["pageSize"]} totalRecords={totalCount} rowsPerPageOptions={[2,3,5]} onPageChange={handlePageClick}/>
          </div>
        ) : (<></>)}
      </div> 
  </>

  let resultado

  if(!errored) { 
    resultado = mostrarOrigenes
  } else{
    resultado = <Error volver="/" />
  }

  return(<>
    <h1>Origenes 📌</h1> 
    {resultado}      
    </>)
}