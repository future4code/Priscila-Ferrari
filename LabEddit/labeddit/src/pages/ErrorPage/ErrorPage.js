import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const ErroStyle = styled.img`
display: flex;
height: 100vh;
width: 100vw;

`;

const ErrorPage = () => {
  const history = useHistory();
  return (
    <div>
      <ErroStyle src="https://e3z7c6v7.rocketcdn.me/blog/wp-content/uploads/2019/02/274034-erro-de-http-wordpress-como-corrigir.jpg"></ErroStyle>

      
    </div>
  );
}

export default ErrorPage;