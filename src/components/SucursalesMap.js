import { useEffect, useState } from "react"
import Geocode from "react-geocode"

import './styles/map.css'
import MapWithMarkers from "./MapWithMarkers"

export default function SucursalesMap(props) {

  const [marcadores, setMarcadores] = useState([])
  const [cargandoMarcadores, setCargandoMarcadores] = useState(true)
  const [cargandoGeocoding, setCargandoGeocoding] = useState(true)

  useEffect(() => {
    initializeGeocode()
    setCargandoGeocoding(false)
  }, [])

  useEffect(() => {
    !cargandoGeocoding && !props.loading &&
    props.sucursales.forEach(sucursal => { //Para cada sucursal
      generarMarcador(sucursal) //genera un marcador
    })
    setCargandoMarcadores(false)
  }, [props.sucursales, cargandoGeocoding])

  const initializeGeocode = () => {
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
    Geocode.setLanguage("en")
    Geocode.setRegion("es")
    Geocode.setLocationType("ROOFTOP")
    Geocode.enableDebug(false)
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

  const centroArgentina = {lat: -38.41, lng: -63.61}

  return(<>
    <MapWithMarkers markers={marcadores} center={centroArgentina} loading={cargandoMarcadores} /> {/* Pasa los marcadores al componente */}
  </>)
}