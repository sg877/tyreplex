import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Rating } from '@mui/material'
import { IoShieldCheckmarkSharp } from 'react-icons/io5'
import { IoLocationOutline } from 'react-icons/io5'
import { FaRegClock } from 'react-icons/fa6'
import Review from './Review'

function Main_comp() {
  const [width, setWidth] = useState(0)

  const carousel = useRef()

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  const deals = [
    {
      id: 1,
      logo:
        'https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300',
    },
    {
      id: 2,
      logo:
        'https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300',
    },
    {
      id: 3,
      logo:
        'https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300',
    },
  ]
  return (
    <div>
      <div className="container main_box py-3 mt-4 px-4">
        <div className="row">
          <div className="col-md-6">
            <div className="">
              <h1 className="d-inline">SHREE HEMKUNT TYRES AND SERVICES</h1>
              <h5 className="px-3 d-inline">
                <IoShieldCheckmarkSharp size="15px" /> Verified
              </h5>
            </div>
            <div className="main_box_text mt-4">
              <span className="rate px-2">4.9</span>
              <span className="px-2">
                <Rating name="size-small" defaultValue={5} size="small" />
              </span>
              <span className="border-bottom border-dark px-1">
                2278 Reviews
              </span>
              <span>
                <button className="rate_button px-2 mx-2">Rate</button>
              </span>
            </div>
            <div className="row mt-3 main_box_text">
              <div className="col-md-1">
                <div className="text-center">
                  <IoLocationOutline
                    size="24px"
                    color=" rgba(19, 15, 38, 0.54) "
                  />
                </div>
              </div>
              <div className="col-md-11">
                <h3>
                  PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA <br></br>
                  KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
                </h3>
              </div>
              <div className="col-md-1">
                <div className="text-center">
                  <FaRegClock size="24px" color=" rgba(19, 15, 38, 0.54) " />
                </div>
              </div>
              <div className="col-md-11">
                <h4 className="pt-1">
                  Open - Monday to Sunday - 10:00AM to 8:00PM
                </h4>
              </div>
              <div className="col-md-1">
                <div className="text-center"></div>
                <div className="col-md-11">
                  <p></p>
                </div>
              </div>
            </div>
            <div className="main_box_text">
              <button className="button px-5 mx-2 py-2">Get Directions</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="Main_box_slider mt-4">
              <motion.div
                ref={carousel}
                whileTap={{ cursor: 'grabbinf' }}
                className="carousel"
              >
                <motion.div
                  drag="x"
                  dragConstraints={{ right: 0, left: -width }}
                  className="inner-carousel"
                >
                  {deals.map((deal) => (
                    <div key={deal.id}>
                      <motion.div className="Main_box_img text-center my-2 mx-2 mb-4">
                        <img className="pt-1" src={deal.logo} alt={deal.name} />
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        <div>
            <Review/>
        </div>
      </div>
    </div>
  )
}

export default Main_comp
