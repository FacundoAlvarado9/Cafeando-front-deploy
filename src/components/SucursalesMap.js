/* import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import './styles/map.css'

export default function SucursalesMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
} */


import { useEffect, useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api";
import Geocode from "react-geocode";

import './styles/map.css'

export default function SucursalesMap(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,    
  });

  const [marcadores, setMarcadores] = useState([])
  const [cargandoMarcadores, setCargandoMarcadores] = useState(true)

  useEffect(() => {
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
    Geocode.setLanguage("en");
    Geocode.setRegion("es");
    Geocode.setLocationType("ROOFTOP");
    Geocode.enableDebug();
    props.sucursales.forEach(sucursal => {
        console.log(sucursal.direccion + ", " + sucursal.ciudad.nombre)
        Geocode.fromAddress(sucursal.direccion + ", " + sucursal.ciudad.nombre).then(res => {
            let coordenadas = res.results[0].geometry.location            
            setMarcadores(prevMarcadores => [
                ...prevMarcadores,
                coordenadas
            ])       
        }).catch()        
    });
  setCargandoMarcadores(false)
  }, [props.sucursales])

  function Map() {
    const center = useMemo(() => (marcadores[0]), []);
  
    return (<>
      <GoogleMap zoom={4} center={center} mapContainerClassName="map-container"> 
        {console.log(marcadores[0])}
        {!cargandoMarcadores &&  marcadores.map((marcador, i) => {
            return <MarkerF key={i} position={marcador} />
        })}
      </GoogleMap>
      </>
    );
  }

  if (!isLoaded || cargandoMarcadores) return <div>Loading...</div>;
  return <Map />;
}