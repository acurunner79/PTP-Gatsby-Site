import React from 'react'
import Layout  from '../components/Layout/index'
import '../styles/about.css'



const About = () => {
    return (
        <Layout>
            <div id="about-main">
                <h1>Who We Are</h1>
                <div id="about-container">
                    <p>Path Trading Partners (PTP) is made up of full and part time traders who have a passion for teaching others. We have taught each other, learned from each other, and live our trading lives with the understanding that we do not know everything, but grasp the core of trading (from decades of experience, learning, and patience).</p>
                        <br/>
                    <p>This gives us a unique lens with which we view all trading situations. We started PTP to teach others this same perspective. We also recognize the importance of continuing to learn and continuing to improve our own trading by learning from our students.</p>
                        <br/>
                    <p>We are not gurus. We are not just trading educators. We are traders who choose to share unique knowledge with other practical, yet passionate trading minds.</p>
                </div>
             </div>
        </Layout>
    )
}



export default About