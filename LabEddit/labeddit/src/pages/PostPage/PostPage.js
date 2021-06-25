import React from "react";
import { useHistory } from "react-router-dom";
import { goHomePage } from "../../routes/coordinator";

const PostPage = () => {
    const history = useHistory();
  return (
    <div>
      <h2>Post Page<button onClick={() => goHomePage(history)}>HomePage</button></h2>
<div>
<div><input placeholder="Escreva seu Post"/></div>
<div><button>Postar Conteúdo</button></div>
</div>




    </div>
  );
}

export default PostPage;