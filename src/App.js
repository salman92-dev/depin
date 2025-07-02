import React from "react";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import './App.css';
import './index.css';

function App() { 
 
  return (
    <section className="App">
      
      <Navbar/>
          <Home/>
          <Footer/>
    
         
        
    </section>
  );
}

export default App;