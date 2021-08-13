import React from 'react'
import Layout from '../components/Layout/index'
import MoveStuffAround from '../components/StockTicker'
import '../styles/contact.css'



const Contact = () => {
    return (
        <Layout>
            <div id="contact-form">
                <div id="contact-card">
                    <h1>Contact Us</h1>
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
                    <h1>Path Trading Partners</h1>
                    <h6>support@pathtradingpartners.com</h6>
                    {/* <br/> */}
                    <h1>Hours of Operation</h1>
                    <h3>Monday-Friday</h3>
                    <h6>7am-4pm CST</h6>
                </div>
            </div>
            <MoveStuffAround />
        </Layout>
    )
}



export default Contact