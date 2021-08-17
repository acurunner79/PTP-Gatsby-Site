import React from "react"
import { createGlobalStyle } from "styled-components";
import Nav from '../Nav/index'
import Footer from '../Footer/index'


const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

body {
  height: 100%;
  text-align: center;
  background-image: linear-gradient(180deg, #6E6969, transparent),url('https://res.cloudinary.com/acurunner79/image/upload/v1624855170/5f827abe96c870c79155bf5c_Hero_20-_20Stocks_c0cij3.png');
  background-color: rgb(39,38,38);
  background-repeat: no-repeat;
  background-size: 100% !important;
  /* background-position: 0px 0px, 50% 0%; */
  margin: 0;
  font-family: 'Montserrat', sans-serif !important;
  font-weight: 500;
}

h1{
  font-size: 60px;
}

h2{
  font-size: 40px;
}

h2, h3, h4, p{
  color: white;
}

ol, ul, li{
  text-decoration: none !important;
}
`


const Layout = ({ children }) => {

  return (
      <div>
            <GlobalStyle />
            <Nav />
                <section>{children}</section> 
            <Footer />
      </div>
  );
};

export default Layout
