import React from 'react'
import { Link } from "gatsby"
import PTPNavLogo from '../../../images/PathTradingPartner_LogoMarkOnly.png'
import './rightNav.css'


const RightNav = (props) => {
  
  
    return (     
    <div className="links-container">
        <Link to="/">
          <li className="links" activeClassName="active" iscurrent="true">
            Home
          </li>
        </Link>
        <Link to="/courses">
            <li className="links" activeClassName="active" iscurrent="true">
              Courses
            </li>
        </Link>
        <Link to="/tools">
            <li className="links" activeClassName="active" iscurrent="true">
              Tools
            </li>
        </Link>
        <Link to="/media">
            <li className="links" activeClassName="active" iscurrent="true">
              Media
            </li>
        </Link>
        <Link to="/about">
            <li className="links" activeClassName="active" iscurrent="true">
              About Us
            </li>
        </Link>
        <Link to="/contact">
            <li className="links" activeClassName="active" iscurrent="true">
              Contact Us
            </li>
        </Link>
        <img id="navlogo-1" src={PTPNavLogo} alt="ptp-logo"/>
    </div>
    )
}

export default RightNav
