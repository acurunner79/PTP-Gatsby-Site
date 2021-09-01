import styled from 'styled-components';
  
// export const Heading = styled.h1`
//    text-align: center;
//    color: green;
// `;
  
// export const Content = styled.div`
//    overflow: scroll;
//    height: 2500px;
// `;
  
export const Button = styled.div`
#scrollbutton{
    display: none;
}

@media(min-width: 767px){
    #scollbutton{
        display: flex;
    }

    #arrow-icon{
        margin: 10px;
        transition: transform .2s;
    }
    
    #arrow-icon:hover{
        transform: scale(1.3);
    }

    position: fixed; 
    /* border: 2px solid white; */
    border-radius: 8px;
    bottom: 40px;
    right: 20px;
    z-index: 1;
    cursor: pointer;
    color: green;
}
`