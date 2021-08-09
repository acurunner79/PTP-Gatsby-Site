import React from 'react'
import Layout from '../components/Layout/index'



const Mike = () => {
    return (
        <Layout>
            <div>
                <h1>Michael G Arnold</h1>
                <div id="about-mike-container">
                    <img src="https://res.cloudinary.com/acurunner79/image/upload/c_scale,w_500/v1628190633/MIKE-A1_m6idie.jpg" alt="mike"/>
                    <ul>
                        <li>25 Year Market Veteran</li>
                        <li>Teaching Traders Online and in Person for 10+ Years</li>
                        <li>Strategy and Development Consultant to Multiple Hedge Funds</li>
                        <li>Former Options Maker on Multiple Exchanges</li>
                        <li>Traded in Chicago, New York  and Switzerland</li>
                        <li>Current Head of Technology and Trading Systems Development for Path Trading Partners</li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default Mike
