import styled from "styled-components";


export const FooterWrapper = styled.div`
ul li{
    font-size: 14px;
    color: lightgray;
    padding: 6px 0 !important;
}
h5{
    font-size: 14px;
    color: white;
    padding: 6px 0;
}
#grid-1, #grid-2, #grid-3, #grid-4, #grid-5{
  margin: 0 auto;
  align-items: left;
}

div#footer-social-media a{
    padding-right: 10px;
    margin: 10px;
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
    margin: 0 auto;
}

#grid-1{
    grid-area: 1/1/2/3;
    height: 150px;
    /* padding-bottom: 20px; */
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
    padding: 10px 0 10px 0;
    text-align: left;
}
@media(min-width: 767px){
    
    div#footer-main{
        display: grid;
        grid-template-columns: 0.5fr 0.5fr 1fr;
        grid-template-rows: repeat(3, 0.5fr);
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
        transition: top ease 0.5s !important;
    }

    .social-media-icons:hover{
        top: -10px !important;
    }
  
}

@media(min-width: 1339px){
    div#footer-main{
        width: 1440px;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 0.5fr);
    }

    #grid-1, #grid-2, #grid-3, #grid-4, #grid-5{
        text-align: left;
}

    #grid-1{
        grid-area: 1/1/2/2;
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