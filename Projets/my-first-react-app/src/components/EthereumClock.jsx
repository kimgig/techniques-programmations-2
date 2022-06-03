import React from 'react'
import ethereum from '../Images/icon-ethereum.svg'
import clock from '../Images/icon-clock.svg'

const EthereumClock = () => {
  return (
    <div className='ethereumclock'>
        <div className='textethereum'>
         <img src={ethereum} alt=""/>0.041ETH
        </div>
        <div className='textclock'>
         <img src={clock} alt=""/>3 days left
        </div>        
    </div>    
  )
}

export default EthereumClock

