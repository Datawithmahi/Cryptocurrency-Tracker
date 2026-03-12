import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = cryptoDetails

  return (
    <li className="crypto-item">
      <div className="coin">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p>{currencyName}</p>
      </div>

      <div className="values">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
