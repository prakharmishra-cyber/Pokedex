import './App.css';
//import { useSelector, useDispatch } from 'react-redux';
import { useGetPokemonByNameQuery } from './redux/services/pokemon'


function App() {

  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
  
  return (
    <div className="App">
      <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
      </div>
    </div>
    
  );
}

export default App;
