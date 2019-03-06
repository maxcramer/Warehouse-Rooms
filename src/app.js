import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './scss/style.scss';



// COMPONENTS RENDER HERE

// import ROUTES
import SecureRoute from './components/common/SecureRoute';
import Header from './components/Header';
import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';




class App extends React.Component {
  render() {
    return(
      <main>
        <Header />
        <Switch>
          <Route exact path="/login" component={AuthLogin} />
          <Route exact path="/register" component={AuthRegister} />

        </Switch>
      </main>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
