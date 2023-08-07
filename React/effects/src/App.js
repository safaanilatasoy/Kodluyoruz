import './App.css';
import {useState, useEffect} from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('Anıl');

  useEffect(() => {
    console.log('Number State Updated!');
  },[number]);

   useEffect(() => {
     console.log("Name State Updated!");
   }, [name]);



  useEffect(() => {
    console.log('Component mount edildi');
  },[]);

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <hr />
      <h1>{name}</h1>
      <button onClick={() => setName('Safa')}>setName</button>
    </div>
  );
}

export default App;
