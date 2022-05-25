import axios from "axios"
import { useEffect, useState } from "react"
import DefaultList from "../components/DefaultList"
import SearchList from "../components/SearchList"
import {AiOutlineSearch} from 'react-icons/ai'
import {useContext} from 'react'
import CryptoContext from '../context/CryptoContext'
import Spinner from "../components/Spinner"

function Home() {
  const [coins, setCoins] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [searched, setSearched] = useState(false)

  const {currency} = useContext(CryptoContext)

  const fetchData = async () => {
    try {
      setIsLoading(true)
      setSearched(false)
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h`)
      const data = await response.data
      setCoins(data)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    } 
  }

  const fetchSearchData = async () => {
    try {
      setIsLoading(true)
      setSearched(true)
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${searchText}`)
      const data = await response.data
      setCoins(data.coins)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    } 
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (searchText !== ''){
      fetchSearchData()
    } else {
      fetchData()
    }
  }

  useEffect(() => {
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="main">
      <form onSubmit={onSubmit}>
      <div className="search">
        
        <input 
          type="text" 
          className="search-field" 
          onChange={(e) => setSearchText(e.target.value)} 
          value={searchText} 
          placeholder="Not on the list? No worries, try here"
        />

        <button type="submit" className="btn search-btn"><AiOutlineSearch /></button>
        
      </div>
      </form>
      {coins && searched ? (
        <SearchList coins={coins} />
      ) : (
        <DefaultList coins={coins} />
      )}
      
    </div>
  )
}

export default Home