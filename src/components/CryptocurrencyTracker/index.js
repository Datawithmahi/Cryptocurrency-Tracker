import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

const cryptocurrenciesApiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
  state = {
    cryptoList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(cryptocurrenciesApiUrl)
    const data = await response.json()

    const updatedData = data.map(each => ({
      id: each.id,
      currencyName: each.currency_name,
      currencyLogo: each.currency_logo,
      euroValue: each.euro_value,
      usdValue: each.usd_value,
    }))

    this.setState({
      cryptoList: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {cryptoList, isLoading} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>

        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-image"
        />

        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList cryptoList={cryptoList} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
