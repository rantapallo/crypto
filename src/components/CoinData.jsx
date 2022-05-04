import {useContext} from 'react'
import CryptoContext from '../context/CryptoContext'
import {curFormatter, intFormatter} from '../util/formatter'

function CoinData({coin}) {
  const {currency} = useContext(CryptoContext)

  return (
    <>
      <div className="coin-data">
        <div className="coin-image">
          <img src={coin.image?.large} alt={coin.name} />
        </div>
        
        <div className="coin-details">
          <p>{coin.name} ({coin.symbol?.toUpperCase()})</p>
          {coin.links?.homepage[0] && 
            <p><a href={coin.links.homepage[0]} target="_blank" rel="noreferrer">Website</a></p>
          }
          <p>Current value: {curFormatter(coin.market_data?.current_price[currency.toLowerCase()], currency)} (
            <span className={coin.market_data?.price_change_percentage_24h > 0 ? 'green' : 'red'}>
            {coin.market_data?.price_change_percentage_24h.toFixed(2)}%</span>)
          </p>
          <p>Market Cap: {curFormatter(coin.market_data?.market_cap[currency.toLowerCase()], currency)}</p>
          <p>24 Hour Trading Vol: {curFormatter(coin.market_data?.market_cap[currency.toLowerCase()], currency)}</p>
          <p>Total volume: {intFormatter(coin.market_data?.total_volume[currency.toLowerCase()])}</p>
          <p>Circulating supply: {intFormatter(coin.market_data?.circulating_supply)}</p>
        </div>

      </div>
      <div className="coin-data">
        <p dangerouslySetInnerHTML={{__html: coin.description?.en}}></p>
      </div>
    </>
  )
}

export default CoinData