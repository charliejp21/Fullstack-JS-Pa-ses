import './App.css';
import Inicio from './views/Inicio/Inicio';
import Countries from './views/Countries/Countries'
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

       </Routes>
        
      </div>

  );
}

export default App;
