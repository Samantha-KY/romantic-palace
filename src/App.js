import './styles/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Events from './pages/Events';
import BookingInfo from './pages/BookingInfo';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/booking" element={<BookingInfo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
