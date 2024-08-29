import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { FiUser } from "react-icons/fi";

function Main_navbar() {
  const navRef = useRef()
  const [carTyresDropdown, setCarTyresDropdown] = useState(false)
  const [bikeTyresDropdown, setBikeTyresDropdown] = useState(false)
  const [tyrePressureDropdown, setTyrePressureDropdown] = useState(false)
  const [commercialDropdown, setCommercialDropdown] = useState(false)
  const [accessoriesDropdown, setAccessoriesDropdown] = useState(false)
  const [moreDropdown, setMoreDropdown] = useState(false)

  const showNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle('responsive_nav')
    }
  }

  return (
    <div className="">
      <header className="pb-1 shadow">
        <Link to="/">
          <img
            className="logo px-5  d-none d-xl-block d-md-none"
            src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
            alt="InternsElite Logo"
          />
        </Link>
        <nav ref={navRef} className="pt-2">
          <li
            className="nav-link-wrapper"
            onMouseEnter={() => setCarTyresDropdown(true)}
            onMouseLeave={() => setCarTyresDropdown(false)}
          >
            <Link className="nav-link text-dark" to="">
              Car Tyres
            </Link>
            {carTyresDropdown && (
              <ul className="dropdown-menu py-2">
                <p className='text-center'>Popular Car Tyre Brands</p>
                <li className="dropdown-item">
                  <Link className="dropdown-link">
                      <div className='row'>
                        <div className='col-md-10'>
                        MRF Tyres
                        </div>
                        <div className='col-md-2'></div>
                      </div>
                  </Link>
                </li>
                <li className="dropdown-item my-2">
                  <Link className="dropdown-link">
                  <div className='row'>
                        <div className='col-md-10'>
                        CEAT Tyres
                        </div>
                        <div className='col-md-2'></div>
                      </div>
                  </Link>
                </li>
                <li className="dropdown-item my-2">
                  <Link className="dropdown-link">
                  <div className='row'>
                        <div className='col-md-10'>
                        Goodyear Tyres
                        </div>
                        <div className='col-md-2'></div>
                      </div>
                  </Link>
                </li>
                <li className="dropdown-item my-2">
                  <Link className="dropdown-link">
                  <div className='row'>
                        <div className='col-md-10'>
                        Apollo Tyres
                        </div>
                        <div className='col-md-2'></div>
                      </div>
                  </Link>
                </li>
                <li className="dropdown-item my-2">
                  <Link className="dropdown-link">
                  <div className='row'>
                        <div className='col-md-10'>
                        Bridgestone Tyres
                        </div>
                        <div className='col-md-2'></div>
                      </div>
                  </Link>
                </li>
                <li className="dropdown-item my-2">
                  <Link className="dropdown-link">
                  <div className='row'>
                        <div className='col-md-10'>
                        JK Tyres
                        </div>
                        <div className='col-md-2'></div>
                      </div>
                  </Link>
                </li>
                <li className="dropdown-item my-2">
                  <Link className="dropdown-link">
                  <div className='row'>
                        <div className='col-md-10'>
                        Michelin Tyres
                        </div>
                        <div className='col-md-2'></div>
                      </div>
                  </Link>
                </li>
                <li className="dropdown-item my-2">
                  <Link className="dropdown-link">
                  <div className='row'>
                        <div className='col-md-10'>
                        All car Tyres
                        </div>
                        <div className='col-md-2'></div>
                      </div>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="nav-link-wrapper"
            onMouseEnter={() => setBikeTyresDropdown(true)}
            onMouseLeave={() => setBikeTyresDropdown(false)}
          >
            <Link className="nav-link text-dark" to="">
              Bike Tyres
            </Link>
            {bikeTyresDropdown && (
              <ul className="dropdown-menu py-2">
              <p className='text-center'>Popular Bike Tyre Brands</p>
              <li className="dropdown-item">
                <Link className="dropdown-link">
                    <div className='row'>
                      <div className='col-md-10'>
                      MRF Tyres
                      </div>
                      <div className='col-md-2'></div>
                    </div>
                </Link>
              </li>
              <li className="dropdown-item my-2">
                <Link className="dropdown-link">
                <div className='row'>
                      <div className='col-md-10'>
                      CEAT Tyres
                      </div>
                      <div className='col-md-2'></div>
                    </div>
                </Link>
              </li>
              <li className="dropdown-item my-2">
                <Link className="dropdown-link">
                <div className='row'>
                      <div className='col-md-10'>
                      Apollo Tyres
                      </div>
                      <div className='col-md-2'></div>
                    </div>
                </Link>
              </li>
              <li className="dropdown-item my-2">
                <Link className="dropdown-link">
                <div className='row'>
                      <div className='col-md-10'>
                      Bridgestone Tyres
                      </div>
                      <div className='col-md-2'></div>
                    </div>
                </Link>
              </li>
              <li className="dropdown-item my-2">
                <Link className="dropdown-link">
                <div className='row'>
                      <div className='col-md-10'>
                      JK Tyres
                      </div>
                      <div className='col-md-2'></div>
                    </div>
                </Link>
              </li>
              <li className="dropdown-item my-2">
                <Link className="dropdown-link">
                <div className='row'>
                      <div className='col-md-10'>
                      Michelin Tyres
                      </div>
                      <div className='col-md-2'></div>
                    </div>
                </Link>
              </li>
              <li className="dropdown-item my-2">
                <Link className="dropdown-link">
                <div className='row'>
                      <div className='col-md-10'>
                      Pirelli Tyres
                      </div>
                      <div className='col-md-2'></div>
                    </div>
                </Link>
              </li>
              <li className="dropdown-item my-2">
                <Link className="dropdown-link">
                <div className='row'>
                      <div className='col-md-10'>
                      All bike Tyres
                      </div>
                      <div className='col-md-2'></div>
                    </div>
                </Link>
              </li>
            </ul>
            )}
          </li>
          <li
            className="nav-link-wrapper"
            onMouseEnter={() => setTyrePressureDropdown(true)}
            onMouseLeave={() => setTyrePressureDropdown(false)}
          >
            <Link className="nav-link text-dark" to="">
            Tyre Pressure
            </Link>
          </li>
          <li
            className="nav-link-wrapper"
            onMouseEnter={() => setCommercialDropdown(true)}
            onMouseLeave={() => setCommercialDropdown(false)}
          >
            <Link className="nav-link text-dark" to="">
            Commercial Tyres
            </Link>
            {commercialDropdown && (
              <ul className="dropdown-menu py-2">
                <li className="dropdown-item">
                  <Link className="dropdown-link">
                  <div className='row'>
                        <div className='col-md-10'>
                        All Commercial Tyres
                        </div>
                        <div className='col-md-2'></div>
                      </div>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="nav-link-wrapper"
            onMouseEnter={() => setAccessoriesDropdown(true)}
            onMouseLeave={() => setAccessoriesDropdown(false)}
          >
            <Link className="nav-link text-dark" to="">
            Accessories
            </Link>
            {accessoriesDropdown && (
              <ul className="dropdown-menu py-2">
                <li className="dropdown-item">
                  <Link className="dropdown-link">
                  <div className='row'>
                        <div className='col-md-10'>
                        Accessories
                        </div>
                        <div className='col-md-2'></div>
                      </div>
                  </Link>
                </li>
                <li className="dropdown-item my-2">
                  <Link className="dropdown-link">
                  <div className='row'>
                        <div className='col-md-10'>
                        Batteries
                        </div>
                        <div className='col-md-2'></div>
                      </div>
                  </Link>
                </li>
                <li className="dropdown-item my-2">
                  <Link className="dropdown-link">
                  <div className='row'>
                        <div className='col-md-10'>
                        Alloys Wheels 
                        </div>
                        <div className='col-md-2'></div>
                      </div>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="nav-link-wrapper"
            onMouseEnter={() => setMoreDropdown(true)}
            onMouseLeave={() => setMoreDropdown(false)}
          >
            <Link className="nav-link text-dark" to="">
            More
            </Link>
            {moreDropdown && (
              <ul className="dropdown-menu py-2">
                <li className="dropdown-item">
                  <Link className="dropdown-link">
                  <div className='row'>
                        <div className='col-md-10'>
                        CashBack Offer
                        </div>
                        <div className='col-md-2'></div>
                      </div>
                  </Link>
                </li>
                <li className="dropdown-item my-2">
                  <Link className="dropdown-link">
                  <div className='row'>
                        <div className='col-md-10'>
                        Find Tyre Dealers
                        </div>
                        <div className='col-md-2'></div>
                      </div>
                  </Link>
                </li>
                <li className="dropdown-item my-2">
                  <Link className="dropdown-link">
                  <div className='row'>
                        <div className='col-md-10'>
                        Compare Tyres
                        </div>
                        <div className='col-md-2'></div>
                      </div>
                  </Link>
                </li>
                <li className="dropdown-item my-2">
                  <Link className="dropdown-link">
                  <div className='row'>
                        <div className='col-md-10'>
                        Are you a Tyre Dealer
                        </div>
                        <div className='col-md-2'></div>
                      </div>
                  </Link>
                </li>
                <li className="dropdown-item my-2">
                  <Link className="dropdown-link">
                  <div className='row'>
                        <div className='col-md-10'>
                        Wheel balancing
                        </div>
                        <div className='col-md-2'></div>
                      </div>
                  </Link>
                </li>
                <li className="dropdown-item my-2">
                  <Link className="dropdown-link">
                  <div className='row'>
                        <div className='col-md-10'>
                        Wheel Alignment
                        </div>
                        <div className='col-md-2'></div>
                      </div>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="nav-link-wrapper user_login"
            onMouseEnter={() => setTyrePressureDropdown(true)}
            onMouseLeave={() => setTyrePressureDropdown(false)}
          >
            <Link className="nav-link text-dark" to="">
            <FiUser size="20px" color='rgba(19, 15, 38, 0.54)' />{' '}Login
            </Link>
          </li>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
        
      </header>
    </div>
  )
}

export default Main_navbar
