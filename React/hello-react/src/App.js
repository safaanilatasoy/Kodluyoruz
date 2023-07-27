import logo from './logo.svg';
import Header from './component/header';
import User from './component/User';


import './App.css';

const friends = [
  {
    id:1,
    name: "Ahmet",
  },
  {
    id: 2,
    name: "Tayfun",
  },
  {
    id:3,
    name: "Gökhan",
  },
];


function App() {
  return (
    <>
      <User 
      name="Anıl" 
      surname="Atasoy" 
      isLoggedIn={true} 
      age={24}
      friends={friends}
      />
    
    </>
  );
}

export default App;
