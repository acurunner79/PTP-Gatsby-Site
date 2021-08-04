import * as React from "react"
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTwitter, FaDesktop, FaChartLine, FaLaptop, FaUser } from 'react-icons/fa'
import '../styles/home.css'


const IndexPage = (props) => {
  return (
    <Layout>
      <div id="main-banner">max-width: 1280px<br/>max-height: 334px</div>
          <div id="upper-container">
            <h1>A Path Less Traveled</h1>
            <p>Path Trading Partners was started by Mike Arnold and Bob Iaccino with one goal in mind: To remove the fog and mystery of trading and active investing and show the novice and journeyman trader alike that there is a path you can take to trading success. It is not the path most tell you. It is the Path Less Traveled.</p>
          </div>
          <div className="slider">
            <Carousel>
              <Carousel.Item>
                <Img fluid={props.data.slideImage1.childImageSharp.fluid} alt="1"/>
                <Carousel.Caption>
                  <h3>Image is 1280px x 500px</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <Img fluid={props.data.slideImage2.childImageSharp.fluid} alt="1"/>
              <Carousel.Caption>
              <h3>Image is 1280px x 500px</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <Img fluid={props.data.slideImage3.childImageSharp.fluid} alt="1"/>
              <Carousel.Caption>
              <h3>Image is 1280px x 500px</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        </div>
          <div className="headshot-container">
            <div className="headshot-card">
              <div className="img">Headshot<br/>500px x 500px</div>
              {/* <img src="https://res.cloudinary.com/acurunner79/image/upload/v1624909640/5f8f3e451826c8978d6c8c3d_Bob_20Iaccino_20Headshot_oeteq4.jpg" alt="bob"/> */}
              <h2>Bob Iaccino</h2>
              <p>Chief Market Strategist</p>
              <FaTwitter />
            </div>
            <div className="headshot-card">
            <div className="img">Headshot<br/>500px x 500px</div>
              {/* <img src="https://res.cloudinary.com/acurunner79/image/upload/v1624909640/5f8f3e451826c8978d6c8c3d_Bob_20Iaccino_20Headshot_oeteq4.jpg" alt="bob"/> */}
              <h2>Mike Arnold</h2>
              <p>Head of Trading Systems</p>
              <FaTwitter />
            </div>
          </div>
            <h1>Find Your Path</h1>
          <div id="mid-container">
            <div className="mid-cont-card">
            <FaDesktop size="70" color="rgb(0, 183, 255)"/>
            <h2>Trading Courses</h2>
            <p>Trading education that starts with the basics and leaves you with an understanding of complex trading products.</p>
            </div>
            <div className="mid-cont-card">
            <FaChartLine size="70" color="rgb(0, 183, 255)"/>
            <h2>Strategies</h2>
            <p>Learn actionable trading strategies. Step by step TOP DOWN analysis that leads you to a yes or no decision on trade selection.</p>
            </div>
            <div className="mid-cont-card">
            <FaLaptop size="70" color="rgb(0, 183, 255)"/>
            <h2>Tools</h2>
            <p>PTP's strategy specific tools that make trading decisions as clear as possible.</p>
            </div>
            <div className="mid-cont-card">
            <FaUser size="70" color="rgb(0, 183, 255)"/>
            <h2>Mentoring</h2>
            <p>Education cannot cover all possible trading scenarios. We offer live Q&A webinars to help you with situation specific questions.</p>
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
        fluid(maxWidth: 4000, maxHeight: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slideImage2: file(relativePath: {eq: "img2.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 4000, maxHeight: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slideImage3: file(relativePath: {eq: "img3.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 4000, maxHeight: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`