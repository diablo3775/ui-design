import dollargreen from '../../assets/dollargreen.png'
import bitcoinlogo from '../../assets/Bitcoinlogo.png'
import bitcointxt from '../../assets/Bitcointxt.png'
import dollar1 from '../../assets/dollar1.png'
import dollar2 from '../../assets/dollar2.png'
import price from '../../assets/Price.png'
import tvl from '../../assets/tvl.png'
import solana from '../../assets/solana/Solana.png'
import solana1 from '../../assets/solana/Solana(1).png'
import solana2 from '../../assets/solana/Solana(2).png'
import solana3 from '../../assets/solana/Solana(3).png'
import eth from '../../assets/eth/Ethereum.png'
import eth1 from '../../assets/eth/Ethereum(1).png'
import eth2 from '../../assets/eth/Ethereum(2).png'
import eth3 from '../../assets/eth/Ethereum(3).png'
import eth4 from '../../assets/eth/Ethereum(4).png'
import eth5 from '../../assets/eth/Ethereum(5).png'
import eth6 from '../../assets/eth/Ethereum(6).png'
import binance2 from '../../assets/binance/BinanceCoinB.png'
import binance from '../../assets/binance/BinanceCoin.png'
import binance1 from '../../assets/binance/BinanceCoin(1).png'
import pp from '../../assets/popularpairs.png'
import './Cards.css'


const Cards = () => {
  return (
    <div className='pad'>
        <div className='card'>
          <div className='card-half-circle'></div>
          <div className='btc-txt'><img src={bitcointxt} /></div>
          <div className='btc-border'><img className='dollar-txt' src={dollar1} /><img className='dollargreen' src={dollargreen} /></div>
          <div className='price'><img src={price} /></div>
          <div className='btc-border-two'><img className='dollar-txt-two' src={dollar2} /></div>
          <div className='tvl'><img src={tvl} /></div>
          <div className='btc-border-three'>
            <img className='solana' src={solana} />
            <img className='solana1' src={solana1} />
            <img className='solana2' src={solana2} />
            <img className='solana3' src={solana3} />
            <img className='eth' src={eth} />
            <img className='eth1' src={eth1} />
            <img className='eth2' src={eth2} />
            <img className='eth3' src={eth3} />
            <img className='eth4' src={eth4} />
            <img className='eth5' src={eth5} />
            <img className='eth6' src={eth6} />
            <img className='binance2' src={binance2} />
            <img className='binance' src={binance} />
            <img className='binance1' src={binance1} />
          </div>
          <div className='pp'><img src={pp} /></div>
        </div>
          <div className="mid-circle">
            <div className='mid-bitcoin'>
              <img className='mid-bitcoin-logo' src={bitcoinlogo} />
            </div>
          </div>
          {/* a */}
          {/* <div className='card'>
          <div className='card-half-circle'></div>
          <div className='btc-txt'><img src={bitcointxt} /></div>
          <div className='btc-border'><img className='dollar-txt' src={dollar1} /><img className='dollargreen' src={dollargreen} /></div>
          <div className='price'><img src={price} /></div>
          <div className='btc-border-two'><img className='dollar-txt-two' src={dollar2} /></div>
          <div className='tvl'><img src={tvl} /></div>
          <div className='btc-border-three'>
            <img className='solana' src={solana} />
            <img className='solana1' src={solana1} />
            <img className='solana2' src={solana2} />
            <img className='solana3' src={solana3} />
            <img className='eth' src={eth} />
            <img className='eth1' src={eth1} />
            <img className='eth2' src={eth2} />
            <img className='eth3' src={eth3} />
            <img className='eth4' src={eth4} />
            <img className='eth5' src={eth5} />
            <img className='eth6' src={eth6} />
            <img className='binance2' src={binance2} />
            <img className='binance' src={binance} />
            <img className='binance1' src={binance1} />
          </div>
          <div className='pp'><img src={pp} /></div>
        </div>
          <div className="mid-circle">
            <div className='mid-bitcoin'>
              <img className='mid-bitcoin-logo' src={bitcoinlogo} />
            </div>
          </div> */}
          {/* a */}
    </div>
  )
}

export default Cards