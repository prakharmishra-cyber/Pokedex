import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, incrementByAmount} from './redux/counter';


function App() {

  const { value }=useSelector((state)=>state.counter);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <div>The value of the count is {value}</div>
      <div>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(incrementByAmount(15))}>Increment by 15</button>
      </div>
    </div>
    
  );
}

export default App;
