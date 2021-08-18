import React from'react'
import { Link } from "gatsby"
import PTPHorizontalLogo from '../../images/pathtradingpartners_horizontal.png'
import './topnav.css'


const Nav = () => {
    return ( 
        <nav id="navbar">
           {/* <div id="image-container">
           </div> */}
            <ul id="nav-links">
               <Link to="/">
                  <img id="navlogo-2" src={PTPHorizontalLogo} alt="ptp-logo"/>
               </Link>
               <Link to="/" className="topnav-link">
                  <li>Home</li>
               </Link>
               <Link to="/courses" className="topnav-link">
                  <li>Courses</li>  
               </Link>
               <Link to="/tools" className="topnav-link">
                  <li>Tools</li> 
               </Link>
               <Link to="/media" className="topnav-link">
                  <li>Media</li> 
               </Link>
               <Link to="/about" className="topnav-link">
                  <li>About</li> 
               </Link>
               <Link to="/contact" className="topnav-link">
                  <li>Contact</li> 
               </Link>  
            </ul>     
        </nav>
    );
  };



export default Nav