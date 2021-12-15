import './App.css';
import {useState} from 'react';

function App() {

  const [user, setUsers]=useState([{
    name:'Prakhar Mishra',
    age:15
  },])
  const [new_name, setNew_Name]=useState('');

  const handleSubmit = () =>{
    setUsers([...user, {
      name:new_name,
      age:15
    }]);
    setNew_Name('');
  }


  return (
    <div className="App">
      {user.map(e=>{
        return (
        <div>His name is {e.name} and his age is {e.age}</div>
        )
      })}
      <input placeholder='Enter the new name' value={new_name} onChange={e=>setNew_Name(e.target.value)}/>
      <button onClick={handleSubmit}>Add +</button>
    </div>
    
  );
}

export default App;
