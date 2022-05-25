import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useContext} from 'react'
import { CryptoProvider } from "./context/CryptoContext"
import ThemeContext from "./context/ThemeContext"
import Coin from "./pages/Coin";
import Home from "./pages/Home";
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import "./App.css"

function App() {

  const {theme} = useContext(ThemeContext)

  return (
    <div className='container' id={theme}>
      <Router>
        <CryptoProvider>
        <Nav />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Coin />} />
        </Routes>
        <Footer />
        </CryptoProvider>
      </Router>
    </div>
  )
}

export default App;
