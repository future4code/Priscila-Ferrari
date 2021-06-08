import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input`
    width: 100%;
    margin-right: 5px;
`

export const SecaoComentario = (props) => {
	const [entradaComentario, setEntradaComentario] = useState("");

	const onChangeComentario = (event) => {
		setEntradaComentario(event.target.value);
	};

	return (
		<CommentContainer>
			<InputComment
				placeholder={'Comentário'}
				value={entradaComentario}
				onChange={onChangeComentario}
			/>
			<button onClick={() => { 
				props.enviarComentario(entradaComentario); 
				}} >Enviar</button>
		</CommentContainer>
	)
}


export default SecaoComentario