import React from 'react';
import './App.css';
import FetchNews from './components/FetchNews';
import Header from './components/Header';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from './components/Details';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element= {<Header />} />
     
     </Routes>
     <Routes>
    <Route path='/' element= {<FetchNews />} />
    <Route path='/details/:id' element={<Details />} />
     </Routes>
     <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
