import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
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
        <Switch>
          <Route path="/workspace/:title"><Home /></Route>
          <Route path="/"><Login /></Route>
        </Switch>
      )}
    </Router>
  );
}

export default App;
