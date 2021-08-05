import React from 'react'
import Layout from '../components/Layout/index'
import '../styles/contact.css'



const Contact = () => {
    return (
        <Layout>
            <div id="contact-form">
                <div id="contact-card">
                    <h1>Contact Us</h1>
                <form>
                    <label className ="form-title">Name</label>
                <input className="form-input"
                  type="name"
                  name ="name"
                  placeholder=" (Required)"></input>
                <br/>
                    <label className ="form-title">Email</label>
                <input className="form-input"
                  type="email"
                  name="email"
                  placeholder=" (Required)"></input>
                <br/>
                    <label className ="form-title">Subject</label>
                <input className="form-input"
                  type="name"
                  name="subject"
                  placeholder=" (Required)"></input>
                <br/>
                    <label className ="form-title">Message</label>
                <input
                  id="message"
                  name="message"
                  placeholder=" How can we help you?"></input>
                  <br/>
                  <button id="form-submit" type="submit">Submit</button>
                </form>
                </div>
                <div id="contact-info">
                    <h1>Path Trading Partners</h1>
                    <p>support@pathtradingpartners.com</p>
                    {/* <br/> */}
                    <h1>Hours of Operation</h1>
                    <h3>Monday-Friday</h3>
                    <p>7am-4pm CST</p>
                </div>
            </div>
        </Layout>
    )
}



export default Contact