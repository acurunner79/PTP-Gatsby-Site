import React from 'react'
import Ticker from 'react-ticker'
import '../../styles/global.css'
 
const MoveStuffAround = () => (
    <div id="stock-ticker-container">
        <Ticker className="ticker-main" speed={10}>
            {({ index }) => (
                <>
                    <h1 className="headline">___Welcome to Path Trading Partners___</h1>
                </>
            )}
        </Ticker>
        {/* <Ticker speed={20}>
        {({ index }) => (
            <>
                <h1 className="headline">  A Path Less Traveled... </h1>
            </>
        )}
        </Ticker> */}
</div>
)
 
export default MoveStuffAround