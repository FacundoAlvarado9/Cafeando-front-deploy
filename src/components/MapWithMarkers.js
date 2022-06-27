import { useMemo } from "react"
import { GoogleMap, MarkerF, useLoadScript} from "@react-google-maps/api"

export default function MapWithMarkers(props) {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        region: "ar",
        language: "es"
    })

    function Map() {
        const center = useMemo(() => ({lat: -38.41, lng: -63.61}), []) //Centrado en el centro de Argentina
        
        return (<>
            <GoogleMap zoom={4} center={center} mapContainerClassName="map-container"> 
            {!props.loading && props.markers.map((marcador, i) => {
                return <MarkerF key={i} position={marcador} />
            })}
            </GoogleMap>
                </>)
    }

    if (!isLoaded || props.loading) return <div>Loading...</div>
    return <Map />
}