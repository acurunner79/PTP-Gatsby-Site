import React from 'react'
import Layout  from '../components/Layout'
import { BsArrowDown } from "react-icons/bs"
import '../styles/tools.css'

const tools = () => {
    return (
        <Layout>
            <h1>Tools</h1>
            <div id="tools-container">
                <div className="tools-card">
                    <img id="motivewave-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1628536007/logo_250x250_2_bykyty.png" alt="Motive Wave"></img>
                    <p>With the 5 Editions of our software plus our mix and match Modules, we’re confident you’ll find the right combination of features and functionality to meet your charting analysis and trading needs while staying within your budget. Just Starting out in Trading? Try our Charts or Trade Edition. Interested in Automated Trading Strategies and BackTesting/Optimization? Try our Strategy Edition. Looking for a Robust Trading Platform? Try our Professional Edition. Want all the bells and whistles including Full Strategy Trading and Elliott Wave with All Degrees Supported? Our Ultimate Edition is for you.</p>
                    {/* <BsArrowDown size="70" color="white"/> */}
                    <h3 className="motivewave-links"><a target="_blank" rel="noreferrer" href="http://www.motivewave.com/free_trial.htm?af=5308106904961024&c=PTP">Get your 14 day free trail</a></h3>
                </div>
                <div className="tools-card">
                    <img id="ninjatrader-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1628789547/NinjaTrader_Logo_rliz92.png" alt="Ninjatrader"></img>
                    <p>NinjaTrader® is our #1 recommended trading software preferred by traders worldwide including our clients.</p><br/>
                    <p>NinjaTrader’s award-winning trading platform is consistently voted an industry leader by the trading community. Featuring 1000s of Apps & Add-Ons for unlimited customization, NinjaTrader is used by over 60,000 traders for advanced market analysis, professional charting and fast order execution.</p><br/>
                    <ul id="tools-ul">
                        <li>Real-time futures data</li>
                        <li>Unlimited real-time forex data</li>
                        <li>Advanced charting</li>
                        <li>Trade simulator</li>
                        <li>Strategy development and backtesting</li>
                        <li>Connect to NinjaTrader Brokerage, Interactive Brokers, TD Ameritrade & more…</li>
                    </ul><br/>
                    <p>For new traders, start preparing for the live markets with a free trading simulator featuring real-time market data.</p>
                    {/* <BsArrowDown size="70" color="white"/> */}
                    <h3 className="ninjatrader-links"><a target="_blank" rel="noreferrer" href="http://ninjatrader.com/LP/VendorDemo/">Get Started for FREE!</a></h3>
                </div>
                <div className="tools-card">
                    <img id="kinetick-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1628790304/Kinetick_Logo_blfs7z.png" alt="Kinetick"></img>
                    <p>Kinetick® delivers reliable, fast and cost-effective market data to help level the playing field for active traders. Take advantage of unfiltered, real time quotes for stocks, futures and forex that exceed the expectations of the world’s most demanding traders, like us!</p><br/>
                    <p>Get started with FREE end-of-day historical market data directly through the NinjaTrader platform and learn how you can significantly reduce CME Group Globex exchange fees on real-time market data with Kinetick</p>
                    {/* <BsArrowDown size="70" color="white"/> */}
                    <h3 className="kinetick-links"><a target="_blank" rel="noreferrer" href="http://kinetick.com/NinjaTrader">Get Started with Free EOD Data</a></h3>
                </div>
            </div>
        </Layout>
    )
}

export default tools
