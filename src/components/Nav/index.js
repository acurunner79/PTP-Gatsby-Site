import React from'react'
import { Link } from "gatsby"
import Hamburger from './Hamburger/index'
import RightNav from './RightNav/index'
import PTPWatermarkLogo from '../../images/PathTradingPartner_LogoMarkOnly.png'
import './nav.css'


const Nav = () => {
    return ( 
        <div className="_nav">
           <Link to="/">
              {/* <img className="navlogo" src={PTPWatermarkLogo} alt=""></img> */}
           </Link>
           <div className="menu-bar">
              <RightNav />
           </div>
           <Hamburger />
        </div>
    );
  };



export default Nav