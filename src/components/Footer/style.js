import styled from "styled-components";


export const FooterWrapper = styled.div`
div#footer-main{
    width: 100%;
    position: absolute;
    /* bottom: -1500; */
    right:0;
    background: black !important;
}

p#trademark{
    font-size: 12px;
    color: white;
    margin: 0 auto !important;
    width: 360px;
}

#social-media{
    display: flex;
    justify-content: space-around;
    padding: 0 110px;
    width: 360px;
    margin: 0 auto !important;
}

@media(min-width: 767px){

    p#trademark{
       width: 760px; 
    }

    #social-media{
        width: 760px;
    }
}

@media(min-width: 1023px){
    p#trademark{
       width: 1020px; 
    }
}
`