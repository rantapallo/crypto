import { Link } from "react-router-dom"
import {useContext} from 'react'
import CryptoContext from '../context/CryptoContext'

function Nav() {
  const {changeCurrency} = useContext(CryptoContext)
  const {currency} = useContext(CryptoContext)
  return (
    <nav>
      <div className="nav-links">
        <div>
          <Link to="/crypto/">Cryptocurrencies</Link>
        </div>
        <div className="select-div">
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