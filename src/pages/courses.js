import React from 'react'
import Layout  from '../components/Layout'
import '../styles/courses.css'


const Courses = () => {
    return (
        <Layout>
            <div>
                <h2>Course Available</h2>
                <div id="tools-container">
                    <h2>Tools</h2>
                    <article><img src="https://res.cloudinary.com/acurunner79/image/upload/v1628129275/motowave-logo_v8dwy0.jpg" alt="Motive Wave"></img>With the 5 Editions of our software plus our mix and match Modules, we’re confident you’ll find the right combination of features and functionality to meet your charting analysis and trading needs while staying within your budget.
Just Starting out in Trading? Try our Charts or Trade Edition. Interested in Automated Trading Strategies and BackTesting/Optimization? Try our Strategy Edition. Looking for a Robust Trading Platform? Try our Professional Edition. Want all the bells and whistles including Full Strategy Trading and Elliott Wave with All Degrees Supported? Our Ultimate Edition is for you.</article>
                </div>
            </div>
        </Layout>
    )
}



export default Courses
