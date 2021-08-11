import React from 'react' 
import { FooterWrapper } from './style'
import {FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram} from 'react-icons/fa'


const Footer = () => {
    return(
        <FooterWrapper >
            <div id="footer-main">
                        <div id="grid-1">
                            <h2>Logo here</h2>
                            <h5>Some text in here under the logo thats relevant to the company</h5>
                            <div>
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/pathtradingpartners">
                            <FaFacebook />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/Path_Trading">
                            <FaTwitter />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/michael-arnold-61240467/?trk=hp-identity-name">
                            <FaLinkedin />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCDFTQBiJea-YwAdiB6121aA">
                            <FaYoutube />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/pathtradingpartners/">
                            <FaInstagram />
                            </a>
                        </div>
                    </div>
                        <div id="grid-2">
                            <h3>Navigate</h3>
                            <h5>Home</h5>
                            <h5>Courses</h5>
                            <h5>About us</h5>
                            <h5>Contact us</h5>
                        </div>
                        <div id="grid-3">
                            <h3>Resourses</h3>
                            <h5>Res 1</h5>
                            <h5>Res 2</h5>
                            <h5>Res 3</h5>
                            <h5>Res 4</h5>
                        </div>
                        <div id="grid-4">
                            <h5>support@pathtradingpartners.com</h5>
                            <h5>Monday-Friday 7am-4pm CST</h5>
                        </div>
                    <div id="grid-5">
                        <h5>PATH TRADING PARTNERS IS NOT AN INVESTMENT ADVISOR AND INFORMATION FOUND ON THIS WEBSITE DOES NOT CONSTITUTE INVESTMENT ADVICE NOR AN OFFER, SOLICITATION OR RECOMMENDATION TO ACQUIRE OR DISPOSE OF ANY INVESTMENT OR TO ENGAGE IN ANY OTHER TRANSACTION. THE INFORMATION ON THIS SITE IS HERE ONLY FOR USE AS GENERAL INFORMATION. ALL DESCRIPTIONS, EXAMPLES AND CALCULATIONS CONTAINED HEREIN ARE FOR ILLUSTRATIVE PURPOSES ONLY. THE RISK OF LOSS IN TRADING THE FOREIGN EXCHANGE, FUTURES AND EQUITY AND OPTIONS MARKETS CAN BE SUBSTANTIAL. YOU SHOULD THEREFORE CAREFULLY CONSIDER WHETHER SUCH TRADING IS SUITABLE FOR YOU IN LIGHT OF YOUR FINANCIAL CONDITION. PAST PERFORMANCE IS NOT INDICATIVE OF FUTURE RESULTS.</h5>
                    </div>
                    </div>
                {/* <p id="trademark">PATH TRADING PARTNERS IS NOT AN INVESTMENT ADVISOR AND INFORMATION FOUND ON THIS WEBSITE DOES NOT CONSTITUTE INVESTMENT ADVICE NOR AN OFFER, SOLICITATION OR RECOMMENDATION TO ACQUIRE OR DISPOSE OF ANY INVESTMENT OR TO ENGAGE IN ANY OTHER TRANSACTION. THE INFORMATION ON THIS SITE IS HERE ONLY FOR USE AS GENERAL INFORMATION. ALL DESCRIPTIONS, EXAMPLES AND CALCULATIONS CONTAINED HEREIN ARE FOR ILLUSTRATIVE PURPOSES ONLY. THE RISK OF LOSS IN TRADING THE FOREIGN EXCHANGE, FUTURES AND EQUITY AND OPTIONS MARKETS CAN BE SUBSTANTIAL. YOU SHOULD THEREFORE CAREFULLY CONSIDER WHETHER SUCH TRADING IS SUITABLE FOR YOU IN LIGHT OF YOUR FINANCIAL CONDITION. PAST PERFORMANCE IS NOT INDICATIVE OF FUTURE RESULTS.</p>
                <div id="social-media">
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/pathtradingpartners">
                    <FaFacebook />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/Path_Trading">
                    <FaTwitter />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/michael-arnold-61240467/?trk=hp-identity-name">
                    <FaLinkedin />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCDFTQBiJea-YwAdiB6121aA">
                    <FaYoutube />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/pathtradingpartners/">
                    <FaInstagram />
                    </a>
                </div> */}
        </FooterWrapper>
    )
}

export default Footer