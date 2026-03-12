import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {cryptoList} = props

  return (
    <div className="table-container">
      <div className="table-header">
        <p>Coin Type</p>
        <div className="values">
          <p>USD</p>
          <p>EURO</p>
        </div>
      </div>

      <ul className="crypto-list">
        {cryptoList.map(each => (
          <CryptocurrencyItem key={each.id} cryptoDetails={each} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
