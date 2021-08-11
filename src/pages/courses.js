import React from 'react'
import Layout  from '../components/Layout'
import { BsArrowDown } from "react-icons/bs"
import { FaDesktop } from "react-icons/fa"
import '../styles/courses.css'


const Courses = () => {
    return (
        <Layout>
            <h1>Trade the Path Way</h1>
            <div id="shop-container">
                <div className="shop-card">
                    <h1>Courses</h1>
                    <FaDesktop id="courses-icon" size="90" color="rgb(0, 183, 255)"/>
                    <p>At Path Trading Partners, we have created our courses with the mission of taking you from beginning to end, from amateur to professional. Our courses include introduction, product structure, strategy and tools. If something seems too easy, finish it anyway. If something seems too advanced, review it multiple times. If you take your trading education as seriously as we take our trading and our research, the only obstacle in your path will be time.</p>
                    <BsArrowDown size="70" color="white"/>
                    <h2><a target="_blank" rel="noreferrer" href="https://path-trading-partners.teachable.com/">Enroll now</a></h2>
                </div>
                <div className="shop-card">
                    <h1>Tools</h1>
                    <img id="motivewave-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1628536007/logo_250x250_2_bykyty.png" alt="Motive Wave"></img>
                    <p>With the 5 Editions of our software plus our mix and match Modules, we’re confident you’ll find the right combination of features and functionality to meet your charting analysis and trading needs while staying within your budget. Just Starting out in Trading? Try our Charts or Trade Edition. Interested in Automated Trading Strategies and BackTesting/Optimization? Try our Strategy Edition. Looking for a Robust Trading Platform? Try our Professional Edition. Want all the bells and whistles including Full Strategy Trading and Elliott Wave with All Degrees Supported? Our Ultimate Edition is for you.</p>
                    <BsArrowDown size="70" color="white"/>
                    <h2><a target="_blank" rel="noreferrer" href="http://www.motivewave.com/free_trial.htm?af=5308106904961024&c=PTP">Get your 14 day free trail</a></h2>
                </div>
            </div>
        </Layout>
    )
}



export default Courses
