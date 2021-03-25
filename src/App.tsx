import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }] = useStateValue() as any
  console.log(user)
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
