import { Link } from "react-router-dom"

function SearchList({coins}) {
  return (
    <>
      <div className="grid-container">
        <div className="list-header">Logo</div>
        <div className="list-header">Name</div>
      </div>
      {coins.map((coin) => (
        <Link to={`/crypto/${coin.id}`} key={coin.id}>
          <div className="grid-container">
            <div className="grid-item"><img src={coin.thumb} /></div>
            <div className="grid-item">{coin.name}</div>
          </div>
        </Link>
      ))}
    </>
  )
}

export default SearchList