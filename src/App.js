import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import GlobalStyle from './styles/global';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route
          exact
          path="/"
          component={ Login }
        />
        <Route
          exact
          path="/carteira"
          component={ Wallet }
        />
      </Switch>
    </div>
  );
}

export default App;