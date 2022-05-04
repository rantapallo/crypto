import { Link } from "react-router-dom"
import {useContext} from 'react'
import CryptoContext from '../context/CryptoContext'
import {curFormatter} from '../util/formatter'

function CryptoItem({coin}) {
  const {currency} = useContext(CryptoContext)

  return (
    <>
    <Link to={`/crypto/${coin.id}`}>
    <div className="grid-container">
      <div className="grid-item"><img src={coin.image} /></div>
      <div className="grid-item">{coin.name}</div>
      <div className="grid-item">{curFormatter(coin.current_price, currency)}</div>
      <div className="grid-item">{coin.price_change_percentage_24h.toFixed(2)}%</div>
    </div>
    </Link>
    </>
  )
}

export default CryptoItem