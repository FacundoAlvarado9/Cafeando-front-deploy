import { useEffect, useState } from "react"
import Geocode from "react-geocode"

import './styles/map.css'
import MapWithMarkers from "./MapWithMarkers"

export default function OrigenMap(props) {

  const [marcador, setMarcador] = useState([])
  const [cargandoMarcadores, setCargandoMarcadores] = useState(true)
  const [cargandoGeocoding, setCargandoGeocoding] = useState(true)

  useEffect(() => {
    initializeGeocode()
    setCargandoGeocoding(false)
  }, [])

  useEffect(() => {
    !cargandoGeocoding && !props.loading &&
    generarMarcador(props.origen)
    setCargandoMarcadores(false)
  }, [props.origen, cargandoGeocoding])

  const initializeGeocode = () => {
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
    Geocode.setLanguage("en")
    Geocode.setRegion("es")
    Geocode.setLocationType("ROOFTOP")
    Geocode.enableDebug(false)
  }

  const generarMarcador = (origen) => {
    Geocode.fromAddress(origen.nombre).then(res => {
      setMarcador([res.results[0].geometry.location])
    }).catch((error) => {
      console.info("No se ha encontrado ubicación para el origen: " + props.origen.nombre)
    })
  }   

  return(<>
    <MapWithMarkers markers={marcador} center={marcador[0]} loading={cargandoMarcadores} /> {/* Pasa los marcadores al componente */}
  </>)
}