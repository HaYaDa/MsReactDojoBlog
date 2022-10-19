// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'; 

function App() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Navbar />
      <div className="content">
        <Home /> 
      </div>
    </div>
  );
}

export default App;


/* start block from starter-app:
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
*/