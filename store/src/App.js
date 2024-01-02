import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import Store from './pages/Store';
import Cancel from './pages/Cancel';
import Success from './pages/Success';
import About from './pages/About';
import CartProvider from './CartContext';
import Questions from './pages/Questions';
import Why from './pages/Why';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Container maxWidth="xl">
          <Navbar />
          <Routes>
            <Route index element={<About />} />
            <Route path="o-nas" element={<About />} />
            <Route path="zestawy" element={<Store />} />
            <Route path="pytania-i-odpowiedzi" element={<Questions />} />
            <Route path="dlaczego-warto" element={<Why />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
