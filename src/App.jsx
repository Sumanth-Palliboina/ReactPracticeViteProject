
import './App.css'
import ContactUs from './components/ContactUs';
import Dashboard from './components/Dashboard';

import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Projects from './components/Projects';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
