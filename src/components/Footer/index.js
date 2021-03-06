import React from 'react' 
import { Link } from 'gatsby'
import { FooterWrapper } from './style'
import {FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram} from 'react-icons/fa'
import { AiOutlineMail, AiOutlineFieldTime } from 'react-icons/ai'
import PTPSmall from '../../images/PathTrading Partners_Final Logo[vector] (1).png'


const Footer = () => {
    return(
        <FooterWrapper>
            <div id="footer-main">
                <div id="grid-1">
                    <img id="footer-logo" src={PTPSmall} alt="ptp-logo"/>
                    <div id="footer-social-media">
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/pathtradingpartners">
                        <FaFacebook className="social-media-icons" size="35" color="rgb(21, 170, 148)"/>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/Path_Trading">
                        <FaTwitter className="social-media-icons" size="35" color="rgb(21, 170, 148)"/>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/michael-arnold-61240467/?trk=hp-identity-name">
                        <FaLinkedin className="social-media-icons" size="35" color="rgb(21, 170, 148)"/>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCDFTQBiJea-YwAdiB6121aA">
                        <FaYoutube className="social-media-icons" size="35" color="rgb(21, 170, 148)"/>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/pathtradingpartners/">
                        <FaInstagram className="social-media-icons" size="35" color="rgb(21, 170, 148)"/>
                        </a>
                    </div>
                </div>
                <div id="grid-2">
                    <ul>
                        <h3>Navigate</h3>
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/courses">
                            <li>Courses</li>
                        </Link>
                        <Link to="/tools">
                            <li>Tools</li>
                        </Link>
                        <Link to="/media">
                            <li>Media</li>
                        </Link>
                        <Link to="/about">
                            <li>About us</li>
                        </Link>
                        <Link to="/contact">
                            <li>Contact us</li>
                        </Link>
                    </ul>
                </div>
                <div id="grid-3">
                    <ul>
                        <h3>Resourses</h3>
                        <li><a target="_blank" rel="noreferrer" href="https://www.purexposuremediagroup.com/">PureXposure</a></li>
                        <li><a target="_blank" rel="noreferrer" href="http://thestockthinktank.com/">Stock Think Tank</a></li>
                        <Link to="/tools">
                            <li>Our Sponsors</li>
                        </Link>
                        <Link to="/terms">
                            <li>Terms & Conditions</li>
                        </Link>
                    </ul>
                </div>
                <div id="grid-4">
                    <h5><AiOutlineMail size="20"/> support@pathtradingpartners.com</h5>
                    <h5><AiOutlineFieldTime size="20"/> Monday-Friday 7am-4pm CST</h5>
                    <br/>
                    <p id="developer-link"><a id="dev-a" target="_blank" rel="noreferrer" href="https://jorgesotocoder.com/">Contact web designer</a></p>
                </div>
                <div id="grid-5">
                    <h5 className="footer-text">Path Trading Partners is not an investment advisor and information found on the websitedoes not constitute investmentadvice nor an offer. Solicitation or recommendation to aquire or dispose of any investment or to engage in any other transaction.The information on this site is here only for use as general information. All descriptions, example, and calculations contained herien are for illustrative purposes only. The risk of loss in trading the foreign exchange, futures, and equity & options markets can be substantial. You should therefore carefully consider whether such trading is suitable for you in light of your financial condition. Past performance is not indictive of future results.</h5>
                    <h5 className="footer-text">Risk Disclosure: Futures and forex trading contains substantial risk and is not for every investor. An investor could potentially lose all or more than the initial investment. Risk capital is money that can be lost without jeopardizing ones??? financial security or life style. Only risk capital should be used for trading and only those with sufficient risk capital should consider trading. Past performance is not necessarily indicative of future results.</h5>
                    <h5 className="footer-text">Hypothetical Performance Disclosure: Hypothetical performance results have many inherent limitations, some of which are described below. No representation is being made that any account will or is likely to achieve profits or losses similar to those shown; in fact, there are frequently sharp differences between hypothetical performance results and the actual results subsequently achieved by any particular trading program. One of the limitations of hypothetical performance results is that they are generally prepared with the benefit of hindsight. In addition, hypothetical trading does not involve financial risk, and no hypothetical trading record can completely account for the impact of financial risk of actual trading. for example, the ability to withstand losses or to adhere to a particular trading program in spite of trading losses are material points which can also adversely affect actual trading results. There are numerous other factors related to the markets in general or to the implementation of any specific trading program which cannot be fully accounted for in the preparation of hypothetical performance results and all which can adversely affect trading results.</h5>
                </div>
            </div>
        </FooterWrapper>
    )
}

export default Footer