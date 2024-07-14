// Write your code here
import './index.css'
import {Component} from 'react'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImg: HEADS_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onCoinToss = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)

    let tossImg
    let updatedHeadsCount = headsCount
    let updatedTailsCount = tailsCount

    if (tossResult === 0) {
      tossImg = HEADS_IMG_URL
      updatedHeadsCount += 1
    } else {
      tossImg = TAILS_IMG_URL
      updatedTailsCount += 1
    }

    this.setState({
      tossResultImg: tossImg,
      headsCount: updatedHeadsCount,
      tailsCount: updatedTailsCount,
    })
  }

  render() {
    const {tossResultImg, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="inner-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={tossResultImg} alt="toss result" className="image" />
          <button type="button" onClick={this.onCoinToss} className="button">
            Toss Coin
          </button>
          <div className="toss-details-container">
            <p className="toss-details">Total: {totalCount}</p>
            <p className="toss-details">Heads: {headsCount}</p>
            <p className="toss-details">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
