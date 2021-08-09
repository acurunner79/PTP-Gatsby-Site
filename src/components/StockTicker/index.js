import React from 'react'
import Ticker from 'react-ticker'
import '../../styles/global.css'
 
const MoveStuffAround = () => (
    <div id="stock-ticker-container">
        <Ticker speed={10}>
            {({ index }) => (
                <>
                    <h1 className="headline">  Welcome to Path Trading Partners...<br/> A Path Less Traveled... </h1>
                    {/* <h1 className="headline">  Welcome to Path Trading Partners...<br/> A path less traveled... </h1> */}
                    {/* <img src="www.my-image-source.com/" alt=""/> */}
                </>
            )}
        </Ticker>
        <Ticker speed={20}>
        {({ index }) => (
            <>
                <h1 className="headline">  Welcome to Path Trading Partners...<br/> A Path Less Traveled... </h1>
                {/* <h1 className="headline">  Welcome to Path Trading Partners...<br/> A path less traveled... </h1> */}
                {/* <img src="www.my-image-source.com/" alt=""/> */}
            </>
        )}
        </Ticker>
</div>
)
 
export default MoveStuffAround