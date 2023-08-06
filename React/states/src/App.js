import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [name, setName] = useState('Safa');
  const [age, setAge] = useState(24);

  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Anıl")}>Change Name</button>
      <button onClick={() => setAge(29)}>Change Age</button>
    </div>
  );
}

export default App;
