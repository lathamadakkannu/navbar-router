//import logo from './logo.svg';
import './App.css';

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Product from './Product';
import Contact from './Contact';

import {Route,Routes} from "react-router-dom"

function App() {
  return (
   
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      
      
    </div>
  );
}

export default App;
