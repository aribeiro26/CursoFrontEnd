import React from "react";

import produtos from '../../data/produtos'

export default props => {

    function getProdutosListitem(){
        return produtos.map(prod => {
        return <li>{prod.id} - {prod.nome} - R$ {prod.preco}</li>

        })
    }

    return(
        <div>
            <h2>Repeticao</h2>
            <ul>
                {getProdutosListitem()}
            </ul>
        </div>
    )
}