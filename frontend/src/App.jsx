import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './pages/login/login';
import Dashboard from './pages/dashboard/dashboard';
import Error from './pages/error/error';
import ProtectedRoute from './protectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={ 
          <ProtectedRoute isProtected={false}>
            <Login />
          </ProtectedRoute>} 
        />
        <Route path="/dashboard" element={ 
          <ProtectedRoute isProtected={true}>
              <Dashboard />
          </ProtectedRoute>} 
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
