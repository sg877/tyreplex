import React, { useState } from 'react';
import Apollo from '../Image/Apollo.png';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from 'react-icons/io5';

const tyresData = [
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
  {
    id: 1,
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    rating: 4,
    reviews: 321,
    price: '₹ 3,247',
    offer: 'Offer available',
    type: 'Tube Type',
    image: 'https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60',
  },
];

function Tyres_sold_comp() {
    const [visibleCards, setVisibleCards] = useState(8);

    const handleViewMore = () => {
        setVisibleCards(prevVisibleCards => prevVisibleCards +8);
    };
  return (
    <div>
      <div className='container Sold_comp my-4'>
        <h2>Services offered by this Dealer</h2>
        <div className='row'>
          {tyresData.slice(0, visibleCards).map((tyre, index) => (
            <div key={index} className='col-md-3'>
              <Link className='Link' to=''>
                <div className='card pt-3 pb-2 mt-3'>
                  <span className='span px-1'>
                    <IoShieldCheckmarkSharp size="15px" />{' '}5 Year Warranty
                  </span>
                  <div className='row px-3'>
                    <div className='col-6'>
                      <img src={Apollo} alt={tyre.name} />
                      <div className='Sold_comp_text'>
                        <h1 className='pt-1'>{tyre.name}</h1>
                        <p className='pt-3'>{tyre.size}</p>
                        <div>
                          <span className="rate px-1">
                            <FaStar size='12px' />{' '}{tyre.rating}
                          </span>{' '}
                          <span className='card_rating'>{tyre.reviews} Review</span>
                          <h2 className='pt-2'>{tyre.price}</h2>
                          <h3 className='py-2'>{tyre.offer}</h3>
                          <h4>{tyre.type}</h4>
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <img className='Type_img' src={tyre.image} alt={tyre.name} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {visibleCards < tyresData.length && (
          <div className='text-center mt-4'>
            <button className='px-2 py-1 view_more_button' onClick={handleViewMore}>View More</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tyres_sold_comp;
