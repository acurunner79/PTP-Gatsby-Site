import React from "react"
import { createGlobalStyle } from "styled-components"
import Nav from '../Nav/index'
import Hamburger from '../Nav/Hamburger/index'
import Footer from '../Footer/index'
import ScrollButton from "../ScrollButton"
import PTPHorizontalLogo from '../../images/pathtradingpartners_horizontal.png'


const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100vw;
  text-align: center;
  background-image: linear-gradient(180deg, #20222b, transparent),url('https://res.cloudinary.com/acurunner79/image/upload/v1624855170/5f827abe96c870c79155bf5c_Hero_20-_20Stocks_c0cij3.png');
  background-color: rgb(39,38,38);
  background-repeat: no-repeat;
  background-size: 100% !important;
  background-position: 0px 0px, 50% 0%;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  overflow-x: hidden;
}

body::-webkit-scrollbar {
  width: 1em;
}
  
body::-webkit-scrollbar-track {
  background-color: transparent !important;
  box-shadow: inset 0 0 12px transparent;
}
  
body::-webkit-scrollbar-thumb {
  background-color: black;
  outline: 1px solid slategrey;
}

a{
  color: rgb(21, 170, 148);
  list-style: none !important;
}

h1{
  font-size: 48px;
  color: rgb(21, 170, 148) !important;
}

h2{
  /* font-size: 40px; */
}

h2, h3, h4, h5, p{
  color: white;
}

ol, ul, li{
  text-decoration: none !important;
}

img#mobile-logo{
  width: 48vw;
  position: fixed;
  left: 2vw;
  top: 0.1vh;
  z-index: 30;
}

@media(min-width: 767px){
  img#mobile-logo{
    display: none;
  }
}
`

const Layout = ({ children }) => {

  return (
      <div>
        <GlobalStyle />
        <img id="mobile-logo" src={PTPHorizontalLogo} alt="mobile-view-logo"/>
        <Hamburger />
        <Nav/>
        <ScrollButton />
            <section>{children}</section> 
        <Footer />
      </div>
  );
};

export default Layout
