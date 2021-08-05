import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Navbar from './Navbar/Navbar';
import User from './Users/User';
import Todos from './TodoApp/Todos'

const App = () => {
  return <Router>
      <Navbar/>
      <Route exact path="/">
        <Todos />
      </Route>
      <Route exact path="/user">
        <User />
      </Route>
  </Router>;
};

export default App;