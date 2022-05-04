import { createContext, useState } from "react"

const CryptoContext = createContext()

export function CryptoProvider({children}){

  const [currency, setCurrency] = useState('EUR')
  const [days, setDays] = useState('30')

  const changeCurrency = (cur) => {
    setCurrency(cur)
  }

  const setGraphDays = (val) => {
    setDays(val)
  }

  const value = {
    changeCurrency,
    setGraphDays,
    days,
    currency
  }

  return (
    <CryptoContext.Provider value={value}>
      {children}
    </CryptoContext.Provider>
  )
}

export default CryptoContext