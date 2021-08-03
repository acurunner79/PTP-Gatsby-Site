import React from 'react'
import { Link } from "gatsby"
import './rightNav.css'


const RightNav = (props) => {
  
  
    return (     
    <div className="links-container">
        <Link to="/">
          <li className="links" onClick={props.handleClick}>
            Home
          </li>
        </Link>
          {/* <a className="links" target="_blank" rel="noreferrer" href="https://twitter.com/Bob_Iaccino">
            <li>Bob Iaccino's Twitter</li>
          </a>
        <Link>
          <li className="links" onClick={props.handleClick}>
            Path Trading's Twitter
          </li>
        </Link> */}
        <Link to="/courses">
            <li className="links" onClick={props.handleClick}>
              Courses
            </li>
        </Link>
        <Link to="/about">
            <li className="links" onClick={props.handleClick}>
              About Us
            </li>
        </Link>
        <Link to="/contact">
            <li className="links" onClick={props.handleClick}>
              Contact Us
            </li>
        </Link>       
    </div>
    )
}

export default RightNav
