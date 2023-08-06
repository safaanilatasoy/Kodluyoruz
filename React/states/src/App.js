import './App.css';
import {useState} from "react";

function App() {
  const [name, setName] = useState('Safa');
  const [age, setAge] = useState(24);

  // Array States

  const [friends, setFriends] = useState(['İlker','Berat']);

  // Object States

  const [address, setAddress] = useState({
    title: 'Istanbul',
    zip: 34402 
  });

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
      <button onClick={() => setFriends([...friends, "Ayşe"])}>
        Add New Friend
      </button>

      <br />
      <hr />
      <br />
      <h2>Address</h2>
      <div>
        {address.title} {address.zip}
      </div>
      <br />
      <button onClick={() => setAddress(
        {
        title: 'Gümüşhane',
        zip: 29000
        
        }
        )}>Change Address</button>
    </div>
  );
}

export default App;
