import React from 'react'
import { Link } from "gatsby"
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
    </div>
    )
}

export default RightNav
