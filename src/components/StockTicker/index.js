import React from 'react'
import Ticker from 'react-ticker'
import '../../styles/global.css'
 
const MoveStuffAround = () => (
    <div id="stock-ticker-container">
        <Ticker className="ticker-main" speed={10}mode="await">
            {({ index }) => (
                <>
                    <h1 className="headline">Welcome to Path Trading Partners</h1>
                </>
            )}
        </Ticker>
</div>
)
 
export default MoveStuffAround