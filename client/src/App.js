import './App.css';
//import { useSelector, useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Pokemons from './components/Pokemons/Pokemons';
import Pokemon from './components/Pokemon/Pokemon';
import {Route, Routes} from 'react-router-dom';


function App() {

  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Pokemons/>}/>
          <Route path='pokemon/:id' element={<Pokemon/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
