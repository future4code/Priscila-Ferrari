import styled from "styled-components";

export const CardsContainer = styled.div`
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;

    @media (max-width: 699px){
        padding:12px;
    }
`

export const ButtonsContainer = styled.div`
    display:flex;
    justify-content: space-around ; 
    flex-wrap:wrap-reverse;
`

export const StyledButton = styled.button`
    background-color: black;
    color: white;
    padding: 12px ;
    font-size: 15px;
    box-sizing: border-box;
    margin-top: 10px;
    margin-bottom: 10px;
    
    &:hover{
        cursor: pointer;
        opacity:0.7;
    }
    `

   
