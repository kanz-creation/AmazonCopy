import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>CHECKOUT!</h1>
          </Route>
          <Route path="/login">
            <h1>Login into my world!</h1>
          </Route>
          <Route path="/">
            <h1>WE AT THE HOME PAGE! HOMIE</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
