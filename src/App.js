import './styles/main.scss';
import NavBar from "./components/NavBar";
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Articulos from './components/Articulos';
import Noticias from './components/Noticias';
import Murales from './components/Murales';
import Mapa from './components/Mapa';
import Error404 from './components/Error404';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={
          <HeroSection />
        } />
        <Route exact path='/articulos' element={
          <Articulos />
        } />
        <Route exact path='/noticias' element={
          <Noticias />
        } />
        <Route exact path='/murales' element={
          <Murales />
        } />
        <Route exact path='/mapa' element={
          <Mapa />
        } />
        <Route path='*' element={
          <Error404 />
        } />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
