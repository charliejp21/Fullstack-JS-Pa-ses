import './App.css';
import Inicio from './views/Inicio/Inicio';
import AvtivitiesContainer from "./views/Actividades/ActividadesCreadas"
import Countries from './views/Countries/Countries'
import CountrieView from './views/Countrie/Countrie';
import CreateActivity from './views/CrearActividad/CrearActividad';
import Results from './views/SearchResults.jsx/SearchResults';
import Nav from './components/Nav/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {

  const { pathname } = useLocation();

  return (

      <div className="App">

        {pathname !== "/" && <Nav />}

       <Routes>

          <Route path="/" element={<Inicio />} />

          <Route path='/countries' element={<Countries />} />

          <Route path='/countrie/:id' element={<CountrieView />} />
          
          <Route path='/results/:nombre' element={<Results />}/>

          <Route path="/crear-actividad/" element={<CreateActivity />}/>

          <Route path='/mis-actividades' element={<AvtivitiesContainer />} />

       </Routes>
        
      </div>

  );
}

export default App;
