import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Deals_comp from '../Component/Deals_comp'
import Dealer_comp from '../Component/Dealer_comp'
import Footer from '../Component/Footer'
import Payment_comp from '../Component/Payment_comp'
import Link_comp from '../Component/Link_comp'
import Main_comp from '../Component/Main_comp'
import Main_navbar from '../Component/Main_navbar'
import Tyres_sold_comp from '../Component/Tyres_sold_comp';

function Index() {
  return (
    <div>
      <Router>
      {/* -------------------Navbar-------------------   */}
      <Main_navbar/>

      {/* -------------SHREE HEMKUNT TYRES AND SERVICES----------- */}
      <Main_comp/>

      {/* -----------------Deals----------------- */}
      <Deals_comp/>

      {/* ----------Services offered by this Dealer------------ */}
      <Dealer_comp/>

      {/* ----------Services offered by this Dealer------------ */}
      <Tyres_sold_comp/>

      {/* --------------------All Link----------------- */}
      <Link_comp/>

      {/* -----------------Payment Mode----------------- */}
      <Payment_comp/>

      {/* ---------------Footer------------------ */}
      <Footer/>
      </Router>
    </div>
  )
}

export default Index
