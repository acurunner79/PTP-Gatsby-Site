import styled from "styled-components";


export const FooterWrapper = styled.div`
ul li{
    font-size: 14px;
    color: lightgray;
    padding: 6px 0 !important;
}

a{
    color: lightgray !important;
}

h5{
    font-size: 15px;
}

h5.footer-text{
    font-size: 14px;
    color: rgb(131, 131, 131);
    padding: 6px 0;
}

img#footer-logo{
    width: 250px;
    margin: 0 auto;
    /* padding-bottom: 20px; */
}

#grid-1, #grid-2, #grid-3, #grid-4, #grid-5{
  margin: 0 auto;
  align-items: left;
}

div#footer-social-media a{
    margin: 10px;
    align-items: center !important;
}

#grid-2 ul li, ul{
    list-style: none;
    position: left;
    padding: 0;
}

#grid-3 ul li{
    list-style: none;
    text-align: left !important;
}

div#footer-main{
    display: grid;
    grid-template-columns: repeat(2, 0.5fr);
    grid-template-rows: repeat(4, 0.3fr);
    margin: 20px auto;
    /* place-items: center; */
}

#grid-1{
    grid-area: 1/1/2/3;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 10px;
}

#grid-2{
    grid-area: 2/1/3/2;
    text-align: left;
}

#grid-3{
    grid-area: 2/2/3/3;
}

#grid-4{
    grid-area: 3/1/4/3;
    /* padding-top: 40px; */
}

#grid-5{
    grid-area: 4/1/5/3;
    border-top: 2px solid rgba(63, 62, 62, 0.651);
    text-align: left;
    width: 100%;
    place-items: center;
    padding: 20px;
}

@media(min-width: 568px){
    div#footer-main{
    display: grid;
    grid-template-columns: repeat(2, 0.5fr);
    grid-template-rows: repeat(4, 0.45fr);
    margin: 20px auto;
    /* place-items: center; */
}
}
@media(min-width: 767px){
    
    div#footer-main{
        display: grid;
        grid-template-columns: 0.5fr 0.5fr 1fr;
        grid-template-rows: repeat(3, 0.7fr);
    }

    #grid-1{
        grid-area: 1/1/2/4;
    }

    #grid-2{
        grid-area: 2/1/3/2;
    }

    #grid-3{
        grid-area: 2/2/3/3;
    }

    #grid-4{
        grid-area: 2/3/3/4;
    }

    #grid-5{
        grid-area: 3/1/4/4;
    }
}

@media(min-width: 1023px){

    .social-media-icons{
        transition: transform .4s;
    }

    .social-media-icons:hover{
        transform: scale(1.3);
        color: white !important;
    }

    #grid-4{
        text-align: left !important;
    }
  
}

@media(min-width: 1439px){
    div#footer-main{
        width: 1440px;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 0.8fr);
    }

    h5{
        font-size: 18px;
    }

    img#footer-logo{
        /* padding-top: -30px; */
        height: 30vh;
    }

    div#footer-social-media{
        /* margin-bottom: 20px !important; */
    }
    
    #grid-1, #grid-2, #grid-3, #grid-4, #grid-5{
        text-align: left;
    }
    
    #grid-1{
        grid-area: 1/1/2/2;
        /* padding-left: 20px; */
        align-items: center;
        margin: 0 auto ;
    }

    #grid-2{
        grid-area: 1/2/2/3;
    }

    #grid-3{
        grid-area: 1/3/2/4;
    }

    #grid-4{
        grid-area: 1/4/2/5;
    }

    #grid-5{
        grid-area: 2/1/3/5;
    }
}
`