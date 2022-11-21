import './styles/main.scss';
import NavBar from "./components/NavBar";
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
