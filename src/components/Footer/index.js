import React from 'react' 
import { FooterWrapper } from './style'
import {FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram} from 'react-icons/fa'


const Footer = () => {
    return(
        <FooterWrapper id="footer">
            <p id="trademark">PATH TRADING PARTNERS IS NOT AN INVESTMENT ADVISOR AND INFORMATION FOUND ON THIS WEBSITE DOES NOT CONSTITUTE INVESTMENT ADVICE NOR AN OFFER, SOLICITATION OR RECOMMENDATION TO ACQUIRE OR DISPOSE OF ANY INVESTMENT OR TO ENGAGE IN ANY OTHER TRANSACTION. THE INFORMATION ON THIS SITE IS HERE ONLY FOR USE AS GENERAL INFORMATION. ALL DESCRIPTIONS, EXAMPLES AND CALCULATIONS CONTAINED HEREIN ARE FOR ILLUSTRATIVE PURPOSES ONLY. THE RISK OF LOSS IN TRADING THE FOREIGN EXCHANGE, FUTURES AND EQUITY AND OPTIONS MARKETS CAN BE SUBSTANTIAL. YOU SHOULD THEREFORE CAREFULLY CONSIDER WHETHER SUCH TRADING IS SUITABLE FOR YOU IN LIGHT OF YOUR FINANCIAL CONDITION. PAST PERFORMANCE IS NOT INDICATIVE OF FUTURE RESULTS.</p>
            <div id="social-media">
                <a href="https://www.facebook.com/pathtradingpartners">
                <FaFacebook />
                </a>
                <a href="https://twitter.com/Path_Trading">
                <FaTwitter />
                </a>
                <a href="https://www.linkedin.com/in/michael-arnold-61240467/?trk=hp-identity-name">
                <FaLinkedin />
                </a>
                <a href="https://www.youtube.com/channel/UCDFTQBiJea-YwAdiB6121aA">
                <FaYoutube />
                </a>
                <a href="https://www.instagram.com/pathtradingpartners/">
                <FaInstagram />
                </a>
            </div>
        </FooterWrapper>
    )
}

export default Footer