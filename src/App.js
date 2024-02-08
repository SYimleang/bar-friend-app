import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

//import logo from './logo.svg'; // Create later
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Box className="App" sx={{ width: '100%'}} m="auto">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes> 
        <Footer />
      </Box>
    </Router>
    
  );
}

export default App;
