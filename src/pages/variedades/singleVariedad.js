import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'

import { getSingleVariedad } from 'network/lib/variedades'

import { Image } from 'primereact/image'
import OrigenesChips from 'components/OrigenesChips'
import './variedad.css'
import { Button } from 'primereact/button'
import Error from 'components/Error'

export default function SingleVariedad(){

    const [variedad, setVariedad] = useState({ 
        tipo: { nombre: "" }, 
        tostaduria: { nombre: "", id: null },
        origenes: [] 
    })
    const [errored, setErrored] = useState(false)

    const { variedad_id }= useParams()

    useEffect(() => {
        getSingleVariedad(variedad_id).then(res => {
            setVariedad(res.data["results"][0])
        }).catch((error) => {
            setErrored(true)
        })
    }, [variedad_id])

    const mostrarVariedad = <>
        <div className="flex flex-column md:flex-row justify-content-center gap-5">
            <div className="imagen flex justify-content-center">
                <Image src={variedad["imagen_url"]} preview={true} />
            </div>
            <div className="datos flex flex-column">
                 <h1>{variedad["nombre"]}</h1>
                <p>{variedad["descripcion"]}</p>
                <p><i>{variedad["tipo"]["nombre"]}</i></p>
                <div className="flex flex-column gap-3">                    
                    <Link to={"/tostadurias/" + variedad["tostaduria"]["id"]}>{variedad["tostaduria"]["nombre"]}</Link>
                    <OrigenesChips variedad={variedad} />
                    <a href={variedad["url"]} target="_blank" rel="noreferrer"><Button label="Ver en su sitio"/></a>
                </div>                
            </div> 
        </div>
    </>

    let result
    if(!errored){
        result = mostrarVariedad
    } else{
        result = <Error volver="/variedades" />
    }
    
    return(<>
        {result}
    </>       
    )

}