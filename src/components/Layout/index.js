import React from "react"
import { createGlobalStyle } from "styled-components";
import Nav from '../Nav/index'
import Footer from '../Footer/index'


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Dosis&family=Rajdhani:wght@300&display=swap');

body {
  text-align: center;
  background-image: linear-gradient(180deg, #20222b, transparent),url('https://res.cloudinary.com/acurunner79/image/upload/v1624855170/5f827abe96c870c79155bf5c_Hero_20-_20Stocks_c0cij3.png');
  background-color: gray;
  background-repeat: no-repeat;
  background-position: 0px 0px, 50% 0%;
  margin: 0;
  font-family: 'Poppins',sans-serif !important;
  font-weight: 500;
}

h3{
  color: white;
}
`


export const Layout = ({ children }) => {

  return (
      <div>
            <GlobalStyle />
            <Nav />
                <section>{children}</section>
            <Footer />
      </div>
  );
};
