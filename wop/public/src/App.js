import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import Tarea from './components/Tarea';
import { ThemeProvider } from './components/context/ThemeContext';

const Instrucciones = () => {
  return (
    <div>
      <h2>Instrucciones</h2>
      {/* Puedes usar lorem ipsum para las instrucciones */}
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </div>
  );
};

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Tareas</Link>
        </li>
        <li>
          <Link to="/instrucciones">Instrucciones</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <ThemeProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" component={Tarea} />
        <Route exact path="/instrucciones" component={Instrucciones} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
};

export default App;
