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
import UsersIndex from './components/users/Index';
import UsersEdit from './components/users/Edit';
import UsersShow from './components/users/Show';
import RoomsIndex from './components/rooms/Index';
import RoomsEdit from './components/rooms/Edit';
import RoomsShow from './components/rooms/Show';

class App extends React.Component {
  render() {
    return(
      <main>
        <Header />
        <Switch>
          <Route exact path="/login" component={AuthLogin} />
          <Route exact path="/register" component={AuthRegister} />
          <Route path="/users/:id/edit" component={UsersEdit} />
          <Route path="/users/:id" component={UsersShow} />
          <Route path ="/users" component = {UsersIndex} />
          <Route path ="/rooms/:id/edit" component = {RoomsEdit} />
          <Route path ="/rooms/:id" component = {RoomsShow} />
          <Route path ="/rooms" component = {RoomsIndex} />
        </Switch>
      </main>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));
