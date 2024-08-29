import React, { useState, useEffect, useRef } from 'react'
import {motion} from 'framer-motion'
import Mrf from '../Image/Mrf.png'
import Apollo from '../Image/Apollo.png'
import Ceat from '../Image/Ceat.png'
import jk from '../Image/jk.png'
import Bridgestone from '../Image/Bridgestone.png'
import Goodyear from '../Image/Goodyear.png'

function Deals_comp() {
  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(()=>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  },[])

    const deals = [
        { id: 1, logo:Mrf, name: 'MRF' },
        { id: 2, logo:Ceat, name: 'CEAT' },
        { id: 3, logo:Apollo, name: 'Apollo' },
        { id: 4, logo:Bridgestone, name: 'Bridgestone' },
        { id: 5, logo:Goodyear, name: 'Goodyear' },
        { id: 6, logo:jk, name: 'JK Tyre' },
        { id: 7, logo:jk, name: 'JK Tyre' },
        { id: 8, logo:jk, name: 'JK Tyre' },
        { id: 9, logo:jk, name: 'JK Tyre' },
        { id: 10, logo:jk, name: 'JK Tyre' },
        { id: 11, logo:jk, name: 'JK Tyre' },
      ];
  return (
    <div>
      <div className='container Deals mt-4'>
      <h2 className='pt-2'>Deals</h2>
        <motion.div ref={carousel} whileTap={{cursor:"grabbinf"}} className='carousel'>
          <motion.div drag="x" dragConstraints={{right:0, left:-width}} className='inner-carousel'>
          {deals.map(deal => (
            <div key={deal.id}>
              <motion.div className='Deals_img text-center my-2 mx-2 mb-4'>
                <img className='pt-1' src={deal.logo} alt={deal.name} />
                <div>
              <h3 className='pt-1'>{deal.name}</h3>
              </div>
              </motion.div>
            </div>
          ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Deals_comp
