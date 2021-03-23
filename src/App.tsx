import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/workspace/:title"><Home /></Route>
        <Route path="/"><Login /></Route>
      </Switch>
    </Router>
  );
}

export default App;
