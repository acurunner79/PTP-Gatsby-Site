import React, {useState, useEffect} from 'react';
import {BsChevronDoubleUp} from 'react-icons/bs';
import { Button } from './style';


  
const ScrollButton = () =>{
  
    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300){
            setVisible(true)
        }    
        else if (scrolled <= 300){
            setVisible(false)
        }
    }
    
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        })
    }

    useEffect(() => {
            window.addEventListener('scroll', toggleVisible)
    }, [])
    
  
    return (
        <div id="scrollbutton-container">
            <Button id="scrollbutton">
            <h6 id="scrollbutton-label" style={{display: visible ? 'block' : 'none'}}>Top</h6>
            <BsChevronDoubleUp id="arrow-icon" size="60" color="rgb(21, 170, 148)" onClick={scrollToTop} 
                style={{display: visible ? 'inline' : 'none'}} />
            </Button>
        </div>
    );
}
  
export default ScrollButton;