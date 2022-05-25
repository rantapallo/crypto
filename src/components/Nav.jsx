import { Link } from "react-router-dom"
import {useContext} from 'react'
import CryptoContext from '../context/CryptoContext'
import ThemeContext from "../context/ThemeContext"

function Nav() {
  const {changeCurrency} = useContext(CryptoContext)
  const {currency} = useContext(CryptoContext)
  const {toggleTheme} = useContext(ThemeContext)
  const {theme} = useContext(ThemeContext)
  return (
    <nav>
      <div className="nav-links">
        <div>
          <Link to="/">Cryptocurrencies</Link>
        </div>
        <div className="select-div">

          <select name="mode" id="mode" value={theme} onChange={(e) => toggleTheme(e.target.value)}>
            <option value="dark">Dark mode</option>
            <option value="light">Light mode</option>
          </select>

          <select name="currency" id="currency" value={currency} onChange={(e) => changeCurrency(e.target.value)}>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>

          

        </div>
      </div>
      
    </nav>
  )
}

export default Nav