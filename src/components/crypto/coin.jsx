import React from 'react'

const Coin = ({coin}) => {
  return (
    <div  className='col-12 col-md-6 col-lg-4 p-4 h-100'>
    <div className='row border shadow p-2 h-100'>
        <div className='col-12 col-md-6 '>
            <h5 className='p-0 m-0'>{coin.name}</h5>
            <h6>{coin.symbol}</h6>
            <p className='p-0 m-0'>price: {Number(coin.price_usd).toLocaleString()}$</p>
            <p className='p-0 m-0'>Price Btc: {Number(coin.price_btc).toLocaleString()}$</p>

         
        </div>

    </div>
</div>
  )
}

export default Coin