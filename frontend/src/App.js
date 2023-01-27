import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from './dashboard/Dashboard';
import LoginPage from './authPages/loginpages/LoginPage';
import RegisterPage from './authPages/registerPages/RegisterPage';
import AlertNotification from './shared/components/AlertNotification';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/dashboard' element={<Dashboard />}/>      
          <Route path='/' element={<Dashboard  />}/>
        </Routes>
      </Router>
      <AlertNotification/>
    </>
  );
}

export default App;
