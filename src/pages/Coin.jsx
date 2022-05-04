import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CoinData from "../components/CoinData";
import CoinGraph from "../components/CoinGraph";
import Spinner from "../components/Spinner";
import axios from "axios"
import {useContext} from 'react'
import CryptoContext from '../context/CryptoContext'

function Coin() {
  const [coin, setCoin] = useState({})
  const [coinHistory, setCoinHistory] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  const {id} = useParams()

  const {currency, days, setGraphDays} = useContext(CryptoContext)

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
      const data = await response.data
      setCoin(data)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    } 
  }

  const fetchHistoryData = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`);
      const data = await response.data
      setCoinHistory(data.prices)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    } 
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    fetchHistoryData()
  }, [days, currency])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="coin-container">
      {coin && (
        <CoinData coin={coin} />
      )}
      <div className="select-div">
        <select name="days" id="days" value={days} onChange={(e) => setGraphDays(e.target.value)}>
          <option value="7">7 days</option>
          <option value="30">30 days</option>
          <option value="365">365 days</option>
        </select>
      </div>
      {coinHistory && (
        <CoinGraph coinHistory={coinHistory} days={days} />
      )}
    </div>
  )
}

export default Coin