import React from 'react'
import { Link } from "gatsby"
import PTPNavLogo from '../../../images/PathTradingPartner_LogoMarkOnly.png'
import PTPHorizontalLogo from '../../../images/pathtradingpartners_horizontal.png'
import './rightNav.css'


const RightNav = (props) => {
  
  
    return (     
    <div className="links-container">
      
      
      <Link to="/">
        <li className="links">
          Home
        </li>
      </Link>
      <Link to="/courses">
          <li className="links" >
            Courses
          </li>
      </Link>
      <Link to="/tools">
          <li className="links" >
            Tools
          </li>
      </Link>
      <Link to="/media">
          <li className="links" >
            Media
          </li>
      </Link>
      <Link to="/about">
          <li className="links" >
            About Us
          </li>
      </Link>
      <Link to="/contact">
          <li className="links">
            Contact Us
          </li>
      </Link>       
        <img id="navlogo-1" src={PTPNavLogo} alt="ptp-logo"/>
    </div>
    )
}

export default RightNav
