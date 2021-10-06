import styled from "styled-components";

export const MainContainer = styled.div`
    display:flex;
    justify-content:left;
    align-items:center;
    flex-wrap:wrap;
    padding:12px;
    margin-top:40px;

  
`

export const TextContainer = styled.div`
    text-align:start;
    width:32vw;
    margin-left:40px;
    color:black;

    
`

export const Card = styled.div`
    width:350px;
    height:520px;
    margin-bottom:10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;

`

export const MovImage = styled.div`
    width:100%;
    height:100%;
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-Content: flex-end;
`

export const StyledButton = styled.button`
    background-color: black;
    color: white;
    padding: 12px ;
    font-size: 15px;
    box-sizing: border-box;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 15px;
    
    &:hover{
        cursor: pointer;
        opacity:0.7;
    }
    `