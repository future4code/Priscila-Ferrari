import React from 'react';


function CardPequeno(props) {
    return (
        <div className="littlecard-container">
            
            <div>
                <h4>{ props.email }</h4>
                <p>{ props.endereco }</p>
                <p>{ props.telefone}</p>
            </div>
        </div>
    )
}

export default CardPequeno;