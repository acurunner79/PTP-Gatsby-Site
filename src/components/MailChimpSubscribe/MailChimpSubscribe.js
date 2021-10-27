import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import '../../styles/contact.css'

const MailChimpSubscribe = () => {

   
    const [data, setData] = useState(null)
    
    const handleChange = (event) => {
        // setLastName({lastName, [event.target.name]: event.target.value})
        setData({data, [event.target.name]: event.target.value})
        // console.log('handleChange', handleChange)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        addToMailchimp(data.email)
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

    }
    return (
        <div id="subscribe">
            <form id="subscribe-form"onSubmit={handleSubmit}>
                <input className="form-input"
                    type="Email"
                    name="email"
                    // value={email}
                    onChange={handleChange}
                    placeholder=" Email address">
                </input>
               <button id="form-submit" type="submit">Click to subscribe</button>
            </form>
        </div>
    )
}

export default MailChimpSubscribe
