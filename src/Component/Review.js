import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: 'Md Nasir',
    image: 'https://lh3.googleusercontent.com/a/AATXAJwZ5yHTyhlbUnanuJwLGdscP95OtAMhFGiAD8Bf=s128-c0x00000000-cc-rp-mo',
    text: 'Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service. We were delighted with your courteous, prompt and professional...',
  },
  {
    id: 2,
    name: 'Rohit Bhati',
    image: 'https://lh3.googleusercontent.com/a/AATXAJxi1FTLTnIbF-wcCFLUqffCFFV07qiTPPBbLVaO=s128-c0x00000000-cc-rp-mo',
    text: 'Went for Tyre change . Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend',
  },
  {
    id: 3,
    name: 'Pradeep Kumar',
    image: 'https://lh3.googleusercontent.com/a/AATXAJwahszZQxSMoUOJ3FOQwAgtMOeWI7bFaQnSRl1a=s128-c0x00000000-cc-rp-mo',
    text: 'Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience.',
  },
  {
    id: 4,
    name: 'Pardeep Kumar',
    image: 'https://lh3.googleusercontent.com/a/AATXAJxSEU9Yb5BLWRsmwk03mp4HWoCs2DayiCCxPW8I=s128-c0x00000000-cc-rp-mo',
    text: 'Best shoppe in Indirapuram. Good customer service. After sale service amazing. Overall nice experience.',
  },
  {
    id: 5,
    name: 'Surjit Kumar',
    image: 'https://lh3.googleusercontent.com/a-/AOh14GhHSizwMQ5QJNIXpB3wdFKkkIEzs8WwYdQUngn6uw=s128-c0x00000000-cc-rp-mo',
    text: 'Genuine and Authorized Tyre shop in indirapuram having latest manufactured stock. Well equipped workshop with professional staff. I change my care Tyre there, highly...',
  },
];

function Review() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <div className='container Review_comp mt-4'>
        <h2 className='pt-2'>2278 Google Reviews</h2>
        <motion.div ref={carousel} whileTap={{ cursor: 'grabbing' }} className='carousel'>
          <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
            {reviews.map((review) => (
              <div key={review.id} >
                <motion.div className='Review_comp_card my-2 mx-2 mb-4'>
                <div className='px-3 py-3'>
                  <img className='d-inline' src={review.image} alt={review.name} />
                  <h1 className='d-inline px-2'>{review.name}</h1>
                </div>
                <div className='text-start'>
                  <p className='px-3'>{review.text}</p>
                </div>
              </motion.div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Review;
