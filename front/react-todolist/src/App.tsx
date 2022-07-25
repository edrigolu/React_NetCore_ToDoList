import './App.css';
import { Route, Switch } from 'react-router';
import Menu from './utils/Menu';
import { BrowserRouter } from 'react-router-dom';
import rutas from './route-config'
import React from 'react';
import configurarValidaciones from './validaciones';

configurarValidaciones();

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Menu />
        <div className="container">
          <Switch>
            {rutas.map(ruta =>
              <Route key={ruta.path}
                path={ruta.path}
                exact={ruta.exact}>
                <ruta.componente />
              </Route>)}
          </Switch>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
