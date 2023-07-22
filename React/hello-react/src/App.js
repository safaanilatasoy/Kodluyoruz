import logo from './logo.svg';
import Header from './component/header';


import './App.css';

const name ="Anil"
const surname = "Atasoy"
const isLoggedIn = true;

function App() {
  return (
    <div className="App">
      <Header />
      <p className="xyz">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        exercitationem laborum ex quasi illo! AbLorem ipsum dolor sit amet
        consectetur adipisicing elit. Voluptatem exercitationem laborum ex quasi
        illo!
      </p>
      <label htmlFor="myinput">
        <input id="myinput" />
      </label>
      {/* Componentlerde değişken render etmek için süslü parantez kullanılır. */}
      <p>{name}</p>
      {/* Koşullu Render İşlemi Örneği: */}
      <h1>{isLoggedIn ? `Hoşgeldin ${name}` : "Giriş Yapılmadı"}</h1>
    </div>
  );
}

export default App;
