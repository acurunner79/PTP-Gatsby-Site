import React from 'react'
import Layout from '../components/Layout/index'
import { AiOutlineMail, AiOutlineFieldTime } from 'react-icons/ai'
import '../styles/contact.css'



const Contact = () => {
    return (
        <Layout>
            <div id="contact-form">
                <div id="contact-card">
                    <h3 className="contact-headers">Contact Us</h3>
                <form>
                    <label className ="form-title">Name<br/>
                        <input className="form-input"
                            type="name"
                            name ="name"
                            placeholder=" (Required)">
                        </input>
                    </label>
                        <br/>
                    <label className ="form-title">Email<br/>
                        <input className="form-input"
                            type="email"
                            name="email"
                            placeholder=" (Required)">
                        </input>
                    </label>
                        <br/>
                    <label className ="form-title">Subject<br/>
                        <input className="form-input"
                            type="name"
                            name="subject"
                            placeholder=" (Required)">
                        </input>
                    </label>
                        <br/>
                    <label className ="form-title">Message<br/>
                        <textarea
                            id="message"
                            name="message"
                            placeholder=" How can we help you?">
                        </textarea>
                    </label>
                        <br/>
                    <button id="form-submit" type="submit">Submit</button>
                </form>
                </div>
                <div id="contact-info">
                    <h3 className="contact-headers">Path Trading Partners</h3>
                    
                    <h5><AiOutlineMail color="white" size="30"/> support@pathtradingpartners.com</h5>
                    <br/>
                    <h3 className="contact-headers">Hours of Operation</h3>
                    <h5><AiOutlineFieldTime color="white" size="30"/> Monday-Friday 7am-4pm CST</h5>
                    <h5></h5>
                </div>
            </div>
        </Layout>
    )
}



export default Contact