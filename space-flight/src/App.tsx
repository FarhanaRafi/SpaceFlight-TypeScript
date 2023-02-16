import React from 'react';
import './App.css';
import FetchNews from './components/FetchNews';
import Header from './components/Header';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Header />
     <FetchNews />
    </div>
  );
}

export default App;
