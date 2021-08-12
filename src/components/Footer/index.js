import React from 'react' 
import { FooterWrapper } from './style'
import {FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram} from 'react-icons/fa'
import { AiOutlineMail, AiOutlineFieldTime } from 'react-icons/ai'


const Footer = () => {
    return(
        <FooterWrapper>
            <div id="footer-main">
                <div id="grid-1">
                    <h2>Logo here</h2>
                    <h5>Some text in here under the logo thats relevant to the company</h5>
                    <div id="footer-social-media">
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/pathtradingpartners">
                        <FaFacebook size="40" color="rgb(0, 183, 255)"/>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/Path_Trading">
                        <FaTwitter size="40" color="rgb(0, 183, 255)"/>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/michael-arnold-61240467/?trk=hp-identity-name">
                        <FaLinkedin size="40" color="rgb(0, 183, 255)"/>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCDFTQBiJea-YwAdiB6121aA">
                        <FaYoutube size="40" color="rgb(0, 183, 255)"/>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/pathtradingpartners/">
                        <FaInstagram size="40" color="rgb(0, 183, 255)"/>
                        </a>
                    </div>
                </div>
                <div id="grid-2">
                    <ul>
                        <h3>Navigate</h3>
                        <li>Home</li>
                        <li>Courses</li>
                        <li>About us</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div id="grid-3">
                    <ul>
                        <h3>Resourses</h3>
                        <li>PureXposure</li>
                        <li>Shop Think Tank</li>
                        <li>Our Sponsors</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div id="grid-4">
                    <h5><AiOutlineMail size="20"/> support@pathtradingpartners.com</h5>
                    <h5><AiOutlineFieldTime size="20"/> Monday-Friday 7am-4pm CST</h5>
                </div>
                <div id="grid-5">
                    <h5>PATH TRADING PARTNERS IS NOT AN INVESTMENT ADVISOR AND INFORMATION FOUND ON THIS WEBSITE DOES NOT CONSTITUTE INVESTMENT ADVICE NOR AN OFFER, SOLICITATION OR RECOMMENDATION TO ACQUIRE OR DISPOSE OF ANY INVESTMENT OR TO ENGAGE IN ANY OTHER TRANSACTION. THE INFORMATION ON THIS SITE IS HERE ONLY FOR USE AS GENERAL INFORMATION. ALL DESCRIPTIONS, EXAMPLES AND CALCULATIONS CONTAINED HEREIN ARE FOR ILLUSTRATIVE PURPOSES ONLY. THE RISK OF LOSS IN TRADING THE FOREIGN EXCHANGE, FUTURES AND EQUITY AND OPTIONS MARKETS CAN BE SUBSTANTIAL. YOU SHOULD THEREFORE CAREFULLY CONSIDER WHETHER SUCH TRADING IS SUITABLE FOR YOU IN LIGHT OF YOUR FINANCIAL CONDITION. PAST PERFORMANCE IS NOT INDICATIVE OF FUTURE RESULTS.</h5>
                </div>
            </div>
        </FooterWrapper>
    )
}

export default Footer