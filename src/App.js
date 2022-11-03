// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'; 
// React Router - 21 - The Net Ninja
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// React - 22 - Exact Match Routes - The Net Ninja
import Create from './components/Create';

function App() {
  return (
    <Router>
      <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home /> 
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
    
  );
}

export default App;


/* default start block from starter-app:
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