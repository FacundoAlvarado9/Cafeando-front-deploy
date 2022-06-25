import { useEffect, useMemo, useState } from "react"
import { GoogleMap, MarkerF, useJsApiLoader} from "@react-google-maps/api"
import Geocode from "react-geocode"

import './styles/map.css'

export default function SucursalesMap(props) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    region: "ar",
    language: "es"
  })

  const [marcadores, setMarcadores] = useState([])
  const [cargandoMarcadores, setCargandoMarcadores] = useState(true)
  const [cargandoGeocoding, setCargandoGeocoding] = useState(true)

  useEffect(() => {
    initializeGeocode()
    setCargandoGeocoding(false)
  }, [])

  useEffect(() => {
    !cargandoGeocoding &&
    props.sucursales.forEach(sucursal => {
      generarMarcador(sucursal)
    })
    setCargandoMarcadores(false)
  }, [props.sucursales, cargandoGeocoding])

  const initializeGeocode = () => {
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
    Geocode.setLanguage("en")
    Geocode.setRegion("es")
    Geocode.setLocationType("ROOFTOP")
    Geocode.enableDebug(true)
  }

  const generarMarcador = (sucursal) => {
    Geocode.fromAddress(sucursal.direccion + ", " + sucursal.ciudad.nombre).then(res => {
      setMarcadores(prevMarcadores => [
        ...prevMarcadores,
        res.results[0].geometry.location
      ])
    }).catch((error) => {
      console.info("No se ha encontrado dirección en mapa para dirección: "+sucursal.direccion +", "+sucursal.ciudad.nombre)
    })
  }

  function Map() {
    const center = useMemo(() => ({lat: -38.41, lng: -63.61}), []) //Centrado en el centro de Argentina
  
    return (<>
      <GoogleMap zoom={4} center={center} mapContainerClassName="map-container"> 
        {!cargandoMarcadores &&  marcadores.map((marcador, i) => {
            return <MarkerF key={i} position={marcador} />
        })}
      </GoogleMap>
      </>
    )
  }  

  if (!isLoaded || cargandoMarcadores) return <div>Loading...</div>
  return <Map />
}