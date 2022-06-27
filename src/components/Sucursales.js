import SucursalCard from "./cards/SucursalCard"
import SucursalesMap from "./SucursalesMap"
import Loading from "./Loading"

export default function Sucursales(props) {
  return(<>
    <div className='flex flex-column gap-5'>
          <h2>Sucursales</h2>
          <div className="grid gap-3 justify-content-center">
              {props.loading ? (<Loading />) : 
                props.sucursales.map(sucursal => {          
                  return <SucursalCard sucursal={sucursal} key={sucursal["id"]}/>
                })
              }
          </div>
          <div className="justify-content-center flex">
            <SucursalesMap sucursales={props.sucursales}/>
          </div>          
        </div> 
  </>)
}