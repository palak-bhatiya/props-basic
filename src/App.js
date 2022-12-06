import logo from './logo.svg';
import './App.css';
import Home from './Home';
var name="qwerty";
var email="qwert@gmail.com";
var arr = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]
function App() {
  return (
    <div className="App">
      <h1>{name}</h1>
      <span>{email}</span>
        <ul>
          {
            arr.map((i) => {
              return(
                <li>{i}</li>
              )
            })
          }
        </ul>
        <Home name={name} email={email} arr={arr}/>
    </div>
  );
}

export default App;
