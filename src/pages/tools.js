import React from 'react'
import Layout  from '../components/Layout'
import Seo from "../components/SEO/index"
import '../styles/tools.css'

const Tools = () => {
    return (
        <Layout>
            <Seo />
            <h1 id="tools-header">Tools</h1>
            <p>Path Trading Partners is proud to have the support of our partners Stock Rover, NinjaTrader, Kinetick, and TradingView. Please feel free to visit the site of our partners below or head back to the courses page <a href="/courses">Here</a> to see what Path Trading Partners has to offer.</p>
            <div id="tools-container">
                <div className="tools-card">
                    <img id="motivewave-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1664027741/SR_Logo_Rectangle_prk7my.png" alt="Motive Wave"></img>
                    <p>Stock Rover is for all investors. If you use Yahoo Finance,  MSN Money, your brokerage company’s web site or any other financial sites for investment research, you owe it to yourself to check out Stock Rover.   Every feature we provide is built around demand from real investors like you.</p>
                    <p>Stock Rover is a powerful investment research and analysis tool that goes well beyond what investors are used to from existing equity research sites.  As an advanced web platform, Stock Rover uses many standard desktop software user interface conventions (such as right click for menus and resizable, detachable and collapsable panels). This makes Stock Rover powerful and functional, while still being quick to learn and simple to use. Stock Rover is also fully mobile, working seamlessly on desktops, laptops, tablets and phones.</p>
                    <h3 className="motivewave-links"><a target="_blank" rel="noreferrer" href="http://www.stockrover.com/pathtradingpartners">Get Started!</a></h3>
                </div>
                <div className="tools-card">
                    <img id="tradingview-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1635221903/logo-preview_lgceto_q7lfae.png" alt="TradingView"></img>
                    <p>What's TradingView? We're a charting platform and social network used by 30M+ traders and investors worldwide to spot opportunities across global markets.</p><p>Look first / Then leap. It's what you'd call our philosophy, that it doesn't matter who you are or what you trade, preparing first then committing is the best way of maximizing life's returns. We see this spirit in our users every day.</p>
                    <h3 className="motivewave-links"><a target="_blank" rel="noreferrer" href="https://www.tradingview.com/">Get Started!</a></h3>
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
                    <h3 className="ninjatrader-links"><a target="_blank" rel="noreferrer" href="http://ninjatrader.com/LP/VendorDemo/">Get Started for FREE!</a></h3>
                </div>
                <div className="tools-card">
                    <img id="kinetick-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1628790304/Kinetick_Logo_blfs7z.png" alt="Kinetick"></img>
                    <p>Kinetick® delivers reliable, fast and cost-effective market data to help level the playing field for active traders. Take advantage of unfiltered, real time quotes for stocks, futures and forex that exceed the expectations of the world’s most demanding traders, like us!</p><br/>
                    <p>Get started with FREE end-of-day historical market data directly through the NinjaTrader platform and learn how you can significantly reduce CME Group Globex exchange fees on real-time market data with Kinetick</p>
                    <h3 className="kinetick-links"><a target="_blank" rel="noreferrer" href="http://kinetick.com/NinjaTrader">Get Started for FREE!</a></h3>
                </div>
            </div>
        </Layout>
    )
}

export default Tools
