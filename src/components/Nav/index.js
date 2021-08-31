import React from'react'
import { Link } from "gatsby"
import PTPHorizontalLogo from '../../images/pathtradingpartners_horizontal.png'
import './topnav.css'


const Nav = () => {

    return ( 
       <div id="nav-container">
        <nav id="navbar">
           {/* <div id="image-container">
           </div> */}
            <ul id="nav-links">
               <Link to="/">
                  <img id="navlogo-2" src={PTPHorizontalLogo} alt="ptp-logo"/>
               </Link>
               <Link to="/" className="topnav-link" activeClassName="active" isCurrent="true">
                  <li>Home</li>
               </Link>
               <Link to="/courses" className="topnav-link" activeClassName="active" isCurrent="true">
                  <li>Courses</li>  
               </Link>
               <Link to="/tools" className="topnav-link" activeClassName="active" isCurrent="true">
                  <li>Tools</li> 
               </Link>
               <Link to="/media" className="topnav-link" activeClassName="active" isCurrent="true">
                  <li>Media</li> 
               </Link>
               <Link to="/about" className="topnav-link" activeClassName="active" isCurrent="true">
                  <li>About</li> 
               </Link>
               <Link to="/contact" className="topnav-link" activeClassName="active" isCurrent="true">
                  <li>Contact</li> 
               </Link>  
            </ul>     
        </nav>
        </div>
    );
  };



export default Nav