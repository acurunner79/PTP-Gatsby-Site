import React from 'react'
import { Layout } from 'components'
import { useStaticQuery, graphql } from 'gatsby'
import { BackgroundSlider }from 'gatsby-image-background-slider'



const Courses = () => {
    return (
        <Layout>
            <h1>Courses</h1>
            <BackgroundSlider 
                  query={useStaticQuery(graphql`
                    query {
                      backgrounds: allFile (filter: {sourceInstanceName: {eq: "backgrounds"}}){
                        nodes {
                          relativePath
                          childImageSharp {
                            fluid (maxWidth: 4000, quality: 100){
                              ...GatsbyImageSharpFluid
                              base64
                              tracedSVG
                              srcWebp
                              originalImg
                              originalName
                            }
                          }
                        }
                      }
                    }
                  `)}
                  initDelay={2} 
                  transition={4} 
                  duration={8} 
                  
                  images={["img1.jpg","img2.jpg","img3.jpg"]} 

                  
                  style={{
                    transform: "rotate(-2deg) scale(.9)",
                  }}           
                > 
                  
                  <div>Woof</div>
                  <div>Meow</div>
                  <></>
                  <a href="https://en.wikipedia.org/wiki/Tasmanian_devil#Conservation_status">
                    I could use a hand
                  </a>
                  <div>I need to find better hobbies</div>
                </BackgroundSlider>
        </Layout>
    )
}



export default Courses
