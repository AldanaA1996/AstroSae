import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Login } from '../Forms';
import { Dashboard } from '../Dashboard';

const index = () => <h1>Home</h1>;
const login = () => <h1>Login</h1>;
const dashboard = () => <h1>Dashboard</h1>;

const App = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">Login</Link>
    </nav>
    <Routes>
      <Route path="/" element={<index />} />
      <Route path="/about" element={<login />} />
      <Route path="/dashboard" element={<dashboard/>} />
    </Routes>
  </Router>
);

export default App;
