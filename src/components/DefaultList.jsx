import CoinItem from "../components/CoinItem"

function DefaultList({coins}) {
  return (
    <>
      <div className="grid-container">
        <div className="list-header">Logo</div>
        <div className="list-header">Name</div>
        <div className="list-header">Current value</div>
        <div className="list-header">Price change 24h</div>
      </div>
      {coins && coins.map((coin) => (
        <CoinItem key={coin.id} coin={coin} />
      ))}
    </>
  )
}

export default DefaultList