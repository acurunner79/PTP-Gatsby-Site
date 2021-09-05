import React from 'react'
import Ticker from 'react-ticker'
import { graphql, useStaticQuery } from 'gatsby'
import '../../styles/global.css'
 


const MoveStuffAround = () => {
    const query = useStaticQuery(graphql`
        query ticker {
            allContentfulStockTicker {
                edges {
                    node {
                        message
                    }
                }
            }
        }
    `)

    console.log("ticker's props", query.allContentfulStockTicker.edges[0].node.message)
    return (
        <div id="stock-ticker-container">
            <Ticker className="ticker-main" speed={10}mode="await">
                {({ index }) => (
                    <>
                        {/* <h1 className="headline">Welcome to Path Trading Partners</h1> */}
                        <h1 className="headline">{query.allContentfulStockTicker.edges[0].node.message}</h1>
                    </>
                )}
            </Ticker>
        </div>
    )
}

export default MoveStuffAround
