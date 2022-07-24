
import './App.css';
import { Route, Switch } from 'react-router';
import Menu from './utils/Menu';
import IndiceEstados from './estados/IndiceEstados';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <LandingPage></LandingPage>
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
