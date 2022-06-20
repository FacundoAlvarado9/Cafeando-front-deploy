import './App.css';
import Routers from 'routes/Router'

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import 'primeflex/primeflex.css';
 

function App() {
  return (
    <div className="App">
      <Routers /> 
    </div>
  );
}

export default App;