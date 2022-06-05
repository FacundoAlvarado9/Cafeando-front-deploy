import './App.css';
import Navbar from 'components/Navbar'
import Routers from 'routes/Router'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">       
        <Routers />   
      </div>
    </div>
  );
}

export default App;
