import React from 'react';
import {
  BrowserRouter as Router, Switch
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Home />
      </Switch>
    </Router>
  );
}

export default App;
