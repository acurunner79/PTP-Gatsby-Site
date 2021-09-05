import styled from "styled-components"; 


export const Content = styled.div`
    width: 95vw;
    margin: 40px auto;
    padding-top: 10px;
    color: white;

@media(min-width: 767px){
    width: 70vw;
}
`
export const Post = styled.div`
    margin: 20px 0;
    text-align: left;
    a{
        font-weight: bold;
        font-size: 20px;
    }
    .blog-header{
        margin: 40px auto;
    }
`
export const Pagination = styled.div`
    text-align: center;
    margin: 80px auto;
    a{
        padding: 15px !important;
        background-color: rgb(21, 21, 22);
        border-radius: 4px;
        &:hover,
	    &.current {
		background-color: gray !important;
		color: white !important;
	}

	&.prev:hover,
	&.next:hover {
		background-color: transparent;
        color: green;
    }
    }`