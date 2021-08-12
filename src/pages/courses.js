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
            </div>
        </Layout>
    )
}



export default Courses
