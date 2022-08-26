import React from 'react'
import './Cards.css'

const Cards = () => {
  return (
    <div className='pad'>
        <div className='container'>
          <div className='circle'></div>
          <div className='btc-txt'>Bitcoin(BTC)</div>
          <div className='btc-money'>$31,813.80<span>+10%</span></div>
        </div>
    </div>
  )
}

export default Cards