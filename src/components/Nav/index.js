import React from'react'
import { Link } from "gatsby"
import Hamburger from './Hamburger/index'
import RightNav from './RightNav/index'
import PTPHorizontalLogo from '../../images/pathtradingpartners_horizontal.png'
import './nav.css'


const Nav = () => {
    return ( 
        <div className="_nav">
           <Link to="/">
              <img className="navlogo" src={PTPHorizontalLogo} alt="nav-logo-mobile"></img>
           </Link>
           <div className="menu-bar">
              <RightNav />
           </div>
           <Hamburger />
        </div>
    );
  };



export default Nav