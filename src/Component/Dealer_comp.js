import React from 'react'

function Dealer_comp() {
    const dealsData = [
        { id: 1, logo:'https://cdn.tyreplex.net/images/wheel-alignment-bal.png?tr=w-100', name: 'Wheel Balancing' },
        { id: 2, logo:'https://cdn.tyreplex.net/images/wheel-alignment.png?tr=w-100', name: 'Wheel Alignment' },
      ];
  return (
    <div>
      <div>
      <div className='container Dealer_comp  pt-2 mt-4 pb-4'>
        <h2>Services offered by this Dealer</h2>
        <div className='row'>
          {dealsData.map(deal => (
            <div key={deal.id} className='col-md-3'>
              <div className='Dealer_comp text-center my-2 py-2 pb-4'>
                <img className='pt-4' src={deal.logo} alt={deal.name} />
                <div>
              <h1 className='pt-4'>{deal.name}</h1>
              <div>
                <button className='text-white px-3 py-1 mt-3'>Book Now</button>
              </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Dealer_comp
