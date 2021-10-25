import React, { useState} from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/index'
import Seo from "../components/SEO/index"
import { AiOutlineMail, AiOutlineFieldTime } from 'react-icons/ai'
// import { Checkbox } from 'pretty-checkbox-react';
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { ValidationError, useForm } from '@formspree/react'
// import listFields from 'gatsby-plugin-mailchimp'
import '../styles/contact.css'



const Contact = () => {

    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [data, setData] = useState(null)

    const handleChange = (event) => {
        setLastName({lastName, [event.target.name]: event.target.value})
        setData({data, [event.target.name]: event.target.value})
        // console.log('handleChange', handleChange)
    }
    
    const firstNameChange = (event) => {
        setFirstName({firstName, [event.target.name]: event.target.value})
    }

    const lastNameChange = (event) => {
        setLastName({lastName, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        

        const FNAME = firstName
        const LNAME = lastName

        addToMailchimp(data.data.email)
        .then(({ msg, result }) => {
            console.log('msg', `${result}: ${msg}`)
            
            if (result !== 'success') {
                throw msg
            }
            alert(msg)
        })
        .catch(err => {
            console.log('err', err)
            alert(err)
        })
        // console.log('data', data)
        // console.log('first', firstName)
        // console.log('last', lastName)
        // console.log('listField',listFields)
    }

    const [state, formSubmit] = useForm("mnqlylrn");
      if (state.succeeded) {
        return (
            <Layout>
                <div id="sent-message">
                    <h1>Thank you!</h1>
                    <h1>Your message has been sent</h1>
                    <Link to="/">
                        <button id="form-submit"><h3>Home Page</h3></button>   
                    </Link>
               </div>
            </Layout>
         )
      }
   
    return (
        <Layout>
            <Seo />
            <div id="contact-form">
                <div id="contact-card">
                    <h1 className="contact-headers">Contact Us</h1>
                <form onSubmit={handleSubmit, formSubmit} method="POST">
                <ValidationError field="email" prefix="Email" errors={state.errors} />
                    <label className ="form-title">First Name<br/>
                        <input className="form-input"
                            type="First Name"
                            name ="first"
                            // value={firstName}
                            onChange={firstNameChange}
                            placeholder=" (Required)">
                        </input>
                    </label>
                        <br/>
                    <label className ="form-title">Last Name<br/>
                        <input className="form-input"
                            type="Last Name"
                            name ="last"
                            // value={lastName}
                            onChange={lastNameChange}
                            placeholder=" (Required)">
                        </input>
                    </label>
                        <br/>
                    <label className ="form-title">Email<br/>
                        <input className="form-input"
                            type="Email"
                            name="email"
                            // value={email}
                            onChange={handleChange}
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
                        <div id="subscribe">
                            <input 
                            type="checkbox"
                            onChange={handleChange}/>
                            <h5> Click to subscribe</h5>
                        </div>
                    <button id="form-submit" type="submit" disabled={state.submitting}>Submit</button>
                </form>
                </div>
                <div id="contact-info">
                    <h3 className="contact-headers">Path Trading Partners</h3>
                    
                    <h5><AiOutlineMail color="white" size="30"/> support@pathtradingpartners.com</h5>
                    <br/>
                    <h3 className="contact-headers">Hours of Operation</h3>
                    <h5><AiOutlineFieldTime color="white" size="30"/> Monday-Friday 7am-4pm CST</h5>
                </div>
            </div>
        </Layout>
    )
}



export default Contact