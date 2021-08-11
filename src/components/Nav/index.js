import React from'react'
import { Link } from "gatsby"
import Hamburger from './Hamburger/index'
import RightNav from './RightNav/index'
import './nav.css'


const Nav = () => {
    return ( 
        <div className="_nav">
           <Link to="/">
               {/* <div className="navlogo">
                     NavLogo<br/>width: 232px<br/>height: 50px
               </div> */}
              {/* <img className="navlogo" src="" alt=""></img> */}
           </Link>
           <div className="menu-bar">
              <RightNav />
           </div>
           <Hamburger />
        </div>
    );
  };



export default Nav