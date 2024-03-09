import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { About } from './pages/About';
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/pages/Home" element={<Home />} />
        <Route path="/pages/Menu" element={<Menu />} />
        <Route path="/pages/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
