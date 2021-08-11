import styled from "styled-components";


export const FooterWrapper = styled.div`

#grid-1, #grid-2, #grid-3, #grid-4, #grid-5{
    background-color: red;
    border: 2px solid yellow;
}

div#footer-main{
    display: grid;
    margin: 0 auto !important;
}

@media(min-width: 767px){
    
    div#footer-main{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
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
  
}

@media(min-width: 1339px){
    div#footer-main{
        width: 1440px;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 0.5fr);
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