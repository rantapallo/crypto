import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { CryptoProvider } from "./context/CryptoContext"
import Coin from "./pages/Coin";
import Home from "./pages/Home";
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import "./App.css"

function App() {
  return (
    <div className='container'>
      <Router>
        <CryptoProvider>
        <Nav />
        <Header />
        <Routes>
          <Route path="/crypto/" element={<Home />} />
          <Route path="/crypto/:id" element={<Coin />} />
        </Routes>
        <Footer />
        </CryptoProvider>
      </Router>
    </div>
  );
}

export default App;
