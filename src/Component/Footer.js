import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className=''>
    <div className='container Footer_top mt-4'>
        <div className='row'>
            <div className='col-md-8'>
                <div className='Footer my-3'>
                    <h1 className='py-1'>Have a question about Tyres?</h1>
                    <h2>Get an answer in 24 hours from our experts.</h2>
                    <div className='pt-2'>
                        <form>
                            <input className='px-3 py-2' type='text' placeholder='Ask or search your question'></input>
                        </form>
                    </div>
                </div>
            </div>
            <div className='col-md-2'>
                <div className='text-center pt-4'>
                    <img src='https://cdn.tyreplex.net/themes/moonlight/images/haveQuestion-bg.png?v=600&tr=q-60'></img>
                </div>
            </div>
        </div>
    </div>
    <div className='footer container'>
        <div className='pt-5 row'>
            <div className='col-md-4'>
                <div className='text-center'>
                <img src='https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60'></img>
                <div className='mt-3'>
                    <a href='' className='px-2'><FaInstagram size='30px' /></a>
                    <a href=''><FaFacebookSquare size='30px'/></a>
                </div>
                </div>
            </div>
            <div className='col-md-8'>
                <div className='row'>
                    <div className='col-md-4'>
                        <ul>
                            <li><a href=''>Who We Are</a></li>
                            <li className='pt-2'><a href=''>Are you a Tyre Dealer?</a></li>
                        </ul>
                    </div>
                    <div className='col-md-4'>
                        <ul>
                            <li><a href=''>Privacy Policy</a></li>
                            <li className='pt-2'><a href=''>Terms of use</a></li>
                        </ul>
                    </div>
                    <div className='col-md-4'>
                        <ul>
                            <li><a href=''>Contact Us</a></li>
                            <li className='py-2'><a href=''>Career</a></li>
                            <li><a href=''>Shipping & Return Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='border border-top mt-3 pt-2 text-center'>
            <p>©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.</p>
        </div>
    </div>
    </div>
  )
}

export default Footer
