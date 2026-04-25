
import './App.css'
import ContactUs from './components/ContactUs';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Projects from './components/Projects';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import Cart from './components/Cart';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />} /> //default route for layout Outlet
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="products" element={<Products />} />
          <Route path="projects" element={<Projects />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
