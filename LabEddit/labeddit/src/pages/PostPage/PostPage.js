import React from "react";
import { useHistory } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";

const PostPage = () => {
  useProtectedPage()  
    const history = useHistory();
  return (
    <div>
      <h2>Post Page</h2>
<div>
<div><input placeholder="Escreva seu Post"/></div>
<div><button>Postar Conteúdo</button></div>
</div>




    </div>
  );
}

export default PostPage;