import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Menu from './utils/Menu';
import IndiceEstados from './estados/IndiceEstados';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
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
            </Route>
            <Route path="/estados">
              <IndiceEstados></IndiceEstados>
            </Route>
          </Switch>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
