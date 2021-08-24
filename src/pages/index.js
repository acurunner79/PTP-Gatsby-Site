import React from "react"
import Layout from '../components/Layout/index'
import SEO from '../components/SEO/index'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Carousel } from 'react-bootstrap'
import MoveStuffAround from '../components/StockTicker'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaDesktop, FaChartLine, FaLaptop, FaUser } from 'react-icons/fa'
import '../styles/home.css'


const IndexPage = (props) => {
  return (
    <Layout>
      <SEO />
      <div id="upper-container">
        <MoveStuffAround />
          <h1 className="home-headers">A Path Less Traveled</h1>
          <p>Path Trading Partners was started by Mike Arnold and Bob Iaccino with one goal in mind: To remove the fog and mystery of trading and active investing and show the novice and journeyman trader alike that there is a path you can take to trading success. It is not the path most tell you. It is the Path Less Traveled.</p>
      </div>
      <div className="slider">
        <Carousel class="rounded">
          <Carousel.Item>
            <Img className="carousel-image" fluid={props.data.slideImage1.childImageSharp.fluid} alt="1"/>
            <Carousel.Caption>
              <h3>Image is 1280px x 500px</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Img className="carousel-image" fluid={props.data.slideImage2.childImageSharp.fluid} alt="1"/>
            <Carousel.Caption>
              <h3>Image is 1280px x 500px</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Img className="carousel-image" fluid={props.data.slideImage3.childImageSharp.fluid} alt="1"/>
            <Carousel.Caption>
              <h3>Image is 1280px x 500px</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div><br/>
        <h1 className="home-headers">Stock Think Tank</h1><br/>
      <div id="pdf-container">
        <img id="pdf" src="https://res.cloudinary.com/acurunner79/image/upload/v1629129945/STT_newsletter_vol002issue007-1_td3p6w.png" alt="pdf-bob"/>
        <div id="stock-think-tank-card">
          <h2 className="home-headers">New Stocks and Special Plays - “Bob's Monthly Newsletter”</h2><br/>
          <p className="stockthink-para">Bob and Mike launched The Stock Think Tank to help investors learn how to properly balance risk and reward in their personal stock portfolios.</p><br/>
          <p className="stockthink-para">8 page monthly newsletter giving traders and investors a “deep dive” into Bob’s favorite opportunities for the month. These timely and insightful recommendations will tell you all about the opportunities and why Bob recommends them.</p><br/>
          <h4 id="pdf-link"><a target="_blank" rel="noreferrer" href="https://alternativedaily.s3.amazonaws.com/StockThinkTank/Newsletters/STT_newsletter_vol002issue007.pdf">Read full article</a></h4>
        </div>
      </div>
        <h1 className="home-headers">Find Your Path</h1>
      <div id="mid-container">
        <Link to="/courses">
          <div className="mid-cont-card">
            <FaDesktop size="70" color="rgb(21, 170, 148)"/>
              <h3>Trading Courses</h3>
              <p className="path-text">Trading education that starts with the basics and leaves you with an understanding of complex trading products.</p><br/>
                <h4 id="tools-link">Go here</h4>
          </div>
        </Link>
        <Link to="/courses">
          <div className="mid-cont-card">
            <FaChartLine size="70" color="rgb(21, 170, 148)"/>
            <h3>Techniques</h3>
            <p className="path-text">Learn actionable trading strategies. Step by step TOP DOWN analysis that leads you to a yes or no decision on trade selection.</p>
            <h4 id="tools-link">Go here</h4>
          </div>
        </Link>
        <Link to="/tools">
          <div className="mid-cont-card">
            <FaLaptop size="70" color="rgb(21, 170, 148)"/>
            <h3>Tools</h3>
            <p className="path-text">PTP's strategy specific tools that make trading decisions as clear as possible.</p><br/>
            <h4 id="tools-link">Go here</h4>
          </div>
        </Link>
        <Link to="/media">
          <div className="mid-cont-card">
            <FaUser size="70" color="rgb(21, 170, 148)"/>
            <h3>Video & Media</h3>
            <p className="path-text">Education cannot cover all possible trading scenarios. We offer live Q&A webinars to help you with situation specific questions.</p>
            <h4 id="tools-link">Go here</h4>
          </div>
        </Link>
      </div>
        <h1 className="home-headers">Vendors</h1>
      <div id="lower-container">
        <div id="vendors-card">
          <a target="_blank" rel="noreferrer" href="http://ninjatrader.com/LP/VendorDemo/"><img className="vendors-image" src="https://res.cloudinary.com/acurunner79/image/upload/v1628789547/NinjaTrader_Logo_rliz92.png" alt="ninjatrader-logo"/></a>
          <a target="_blank" rel="noreferrer" href="http://kinetick.com/NinjaTrader"><img className="vendors-image" src="https://res.cloudinary.com/acurunner79/image/upload/v1628790304/Kinetick_Logo_blfs7z.png" alt="kinetick-logo"/></a>
          <a target="_blank" rel="noreferrer" href="http://www.motivewave.com/free_trial.htm?af=5308106904961024&c=PTP"><img className="vendors-image" src="https://res.cloudinary.com/acurunner79/image/upload/v1628741382/logo2_hqkjwo.png" alt="motivewave-logo"/></a>
          <a target="_blank" rel="noreferrer" href="https://www.tradingview.com/gopro/?share_your_love=spekul8r"><img className="vendors-image" src="https://res.cloudinary.com/acurunner79/image/upload/v1628807971/logo-preview_lgceto.png" alt="tradingview-logo"/></a>
        </div>  
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    slideImage1: file(relativePath: {eq: "img1.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slideImage2: file(relativePath: {eq: "img2.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slideImage3: file(relativePath: {eq: "img3.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`