import './App.css';
import {useState} from "react";

function App() {
  const [name, setName] = useState('Safa');
  const [age, setAge] = useState(24);

  // Array States

  const [friends, setFriends] = useState(['İlker','Berat']);

  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Anıl")}>Change Name</button>
      <button onClick={() => setAge(29)}>Change Age</button>

      <hr />
      <br />
      <br />
      <h2>My Friends</h2>
      {friends.map((friend, index) => (
        <div>{friend}</div>
      ))}
      <br />
      <button onClick={() => setFriends([...friends,'Ayşe'])}>Add New Friend</button>
    </div>
  );
}

export default App;
