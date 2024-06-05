import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
