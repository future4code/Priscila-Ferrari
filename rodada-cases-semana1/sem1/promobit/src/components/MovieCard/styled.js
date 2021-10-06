import styled from "styled-components";

export const Card = styled.div`
    width:250px;
    height:400px;
    margin-bottom:35px;
    transition: 0.3s;
    border-radius: 2px;

    &:hover{
        cursor: pointer;
    }
`
export const MovImage = styled.div`
    width:100%;
    height:100%;
    background-size: cover;
    background-position: center;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-Content: flex-end;
`