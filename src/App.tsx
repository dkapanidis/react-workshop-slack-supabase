import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import Home from './Home';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }] = useStateValue() as any
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <Home />
      )}
    </Router>
  );
}

export default App;
