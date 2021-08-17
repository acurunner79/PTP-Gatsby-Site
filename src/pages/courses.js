import React from 'react'
import Layout  from '../components/Layout'
import { BsArrowDown } from "react-icons/bs"
import { FaDesktop } from "react-icons/fa"
import '../styles/courses.css'


const Courses = () => {
    return (
        <Layout>
            <h3 className="courses-headers">Trade the Path Way</h3>
                    <p>At Path Trading Partners, we have created our courses with the mission of taking you from beginning to end, from amateur to professional. Our courses include introduction, product structure, strategy and tools. If something seems too easy, finish it anyway. If something seems too advanced, review it multiple times. If you take your trading education as seriously as we take our trading and our research, the only obstacle in your path will be time.</p>
                    <h3 className="courses-headers">Featured Courses</h3>
            <div id="shop-container">
                <div className="shop-card">
                    <FaDesktop id="courses-icon" size="90" color="rgb(194, 225, 20)"/>
                    <h2>Doubles</h2>
                    <h3>How to trade Doubles, a very reliable reversal pattern</h3>
                    <p className="courses-text">In this course we provide a breakdown of traditional double tops and bottoms and what's wrong with them. We will also provide concrete rules for finding PTP High-Probability Doubles along with step-by-step instructions on how to trade PTP High-Probability Doubles.</p>
                </div>
                <div className="shop-card">
                    <FaDesktop id="courses-icon" size="90" color="rgb(194, 225, 20)"/>
                    <h2>Support, Resistance, and Significant Levels</h2>
                    <p className="courses-text">Support and Resistance is great, but are you aware that not all levels are created equal? Many traders think of support and resistance as just a support line or a resistance line. They treat this line as an exact science and don’t have a consistent way of drawing the lines or determining trades to take off of the support and resistance lines. In This course set, you will learn our concept of Significant Levels. A Significant Level is an area of the market to which price has had a strong emotional reaction, and is likely to have a strong reaction again. Learn to spot them, draw them and use them to trade and plce good, solid stop-loss orders.</p>
                </div>
                <div className="shop-card">
                    <FaDesktop id="courses-icon" size="90" color="rgb(194, 225, 20)"/>
                    <h2>Candlesticks and Candlestick Math</h2>
                    <p className="courses-text">Introduction of opening and closing price to bars and classification of bars inclusive of opening and closing price. Review of trading by living candle by candle and the negative impact to trading performance. Dealing with noise in the market and the utilization of candlestick math to mitigate market noise. A Review of candlestick bars and characteristics. Analysis and practical application of candlestick patterns.</p>
                </div>
            </div>
            <button className="buttons"><a target="_blank" rel="noreferrer" href="https://path-trading-partners.teachable.com/">Enroll now</a></button >
        </Layout>
    )
}



export default Courses
