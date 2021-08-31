import React from 'react'
import Layout  from '../components/Layout/index'
import Seo from "../components/SEO/index"
import { Link } from 'gatsby'
import { FaLaptop } from 'react-icons/fa'
import { GiTeacher } from 'react-icons/gi'
import '../styles/about.css'



const About = () => {
    return (
        <Layout>
            <Seo />
            <div id="about-main">
                <h1 className="about-headers">Who We Are</h1>
                <div id="about-container">
                    <p>Path Trading Partners (PTP) is made up of full and part time traders who have a passion for teaching others. We have taught each other, learned from each other, and live our trading lives with the understanding that we do not know everything, but grasp the core of trading (from decades of experience, learning, and patience).</p>
                        <br/>
                    <p>This gives us a unique lens with which we view all trading situations. We started PTP to teach others this same perspective. We also recognize the importance of continuing to learn and continuing to improve our own trading by learning from our students.</p>
                        <br/>
                    <p>We are not gurus. We are not just trading educators. We are traders who choose to share unique knowledge with other practical, yet passionate trading minds.</p>
                </div>
                <div className="headshot-container">
                    <div className="headshot-card">
                        <img className="img" src="https://res.cloudinary.com/acurunner79/image/upload/v1628190051/bob-i_qjkyxl.jpg" alt="bob"/>
                        <h3 className="about-names">Bob Iaccino</h3>
                        <h5>Chief Market Strategist</h5>
                        <Link to="/bob">
                            <button className="buttons">More about Bob</button>
                        </Link>
                    </div>
                    <div className="headshot-card">
                        <img className="img" src="https://res.cloudinary.com/acurunner79/image/upload/v1628190633/MIKE-A1_m6idie.jpg" alt="mike"/>
                        <h3 className="about-names">Mike Arnold</h3>
                        <h5>Head of Trading Systems</h5>
                        <Link to="/mike">
                            <button className="buttons">More about Mike</button>
                        </Link>
                    </div>
                </div>
                <h1 className="about-headers">What We Offer</h1>
                    <div id="lower-container">
                        <div className="about-card">
                            <a target="_blank" rel="noreferrer" href="https://path-trading-partners.teachable.com/">
                                <FaLaptop size="70" color="rgb(21, 170, 148)"/>
                                <h2>Trader Training</h2>
                                <p>Path Trading Partners is where you learn that the daunting task of becoming a consistent trader is simply a matter of time and process. We start with foundational knowledge and progress to complete trading methodology. We offer binary spread and binary options strategies as well as traditional market methodologies and strategies through our sister site, Market Masters Program. With over 45 years combined trading, money management, strategy development and consulting experience and there very few trading related situations we haven't encountered. We take pride in our content and a personal interest in our apprentice's development. Browse our offerings and join us today. Don't wait another minute to find out what kind if trader you can be.</p>
                            </a>
                        </div>
                        <div className="about-card">
                            <a target="_blank" rel="noreferrer" href="https://path-trading-partners.teachable.com/">
                                <GiTeacher size="70" color="rgb(21, 170, 148)"/>
                                <h2>Personal Coaching</h2>
                                <p>Path Trading Partners offers one on one personal coaching on an extremely limited basis. We are traders first and taking time to coach potential traders one on one takes time away from our trading and therefore is done on a case by case basis. We offer live webinars in all of our training packages to make sure our traders get the personal attention that can be the difference between success and failure when pursuing a trading career. If you are however, interested in personal coaching, please email support at support@pathtradingpartners.com with the subject line “Personal Coaching” and we will set up a time to discuss your needs and try work with you on a personal coaching package.</p>
                            </a>
                        </div>
                    </div>
             </div>
        </Layout>
    )
}



export default About