import React from 'react'
import Layout from '../components/Layout'
import '../styles/bob.css'

const Bob = () => {
    return (
        <Layout>
            <div>
                <h1>Bob Iaccino</h1>
                <div id="about-bob-container">                  
                        <img src="https://res.cloudinary.com/acurunner79/image/upload/c_scale,w_500/v1628190051/bob-i_qjkyxl.jpg" alt="bob"></img>
                    <div id="bob-text-area">
                        <p>Bob Iaccino spent the last 22 years in the commodities, futures and Forex markets. He is in high demand by various media outlets for his unparalleled understanding of market confidence, tone and trader outlook. He has appeared on CNBC, CNBC Asia, Bloomberg Television and radio, CNN, CNN International, CNN Moneyline, Fox Business News, First Business (Canada), Phoenix TV (China) and several local television broadcasts throughout the country.</p>
                            <br/>
                        <p>To date, Bob has done over 700 interviews on various economic, political and market-based topics. He continues to appear in 10-15 live television interviews per month. Bob got his start in 1993 by joining Nikko Securities (Japan’s third largest brokerage house at the time) as a phone clerk. Bob left Nikko in 1997 to serve as Chief Market Strategist for Commerzbank Futures, the brokerage arm of Germany’s 4th largest bank at that time. Bob began distributing his research and insight into the markets to the bank’s traders and clients as well as trading his own account.</p>
                            <br/>
                        <p>Bob left Commerzbank in late 2002 to become Chief Market Strategist for a proprietary trading firm based in Chicago, who gave him the opportunity to run his own commodity pool. This local firm had over 100 traders that relied on Bob’s analysis to help them in their daily trading. During this time, he also gave internal seminars on trading psychology and proper trader disciplines and mindsets.</p>
                            <br/>
                        <p>Bob has also served as a Principal and member of the investment committee for a futures and Forex based Fund of Funds with $84 million in AUM, where his responsibilities included trader-style analysis and manager selection. He was one half of a 2-person committee charged with discovering “start-up” managers. Bob also served as the Chief Market Strategist for TopstepTrader and Dean of TopstepTrader University’s College of Trader development. He used his extensive trading and analytical experience to give real world insight and direction to individual traders across the globe. Bob currently serves as the Chief Market Strategist for Tethys Partners, a physical oil firm with transactions in excess of $2 Billion in 2014.</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Bob
