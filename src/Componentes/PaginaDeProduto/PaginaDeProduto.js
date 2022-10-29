import { useState } from 'react'
import './PaginaDeProduto.css'

const PaginaDeProduto = (props) => {

    return (
        <section className="pagina-do-produto">
            <img src={props.movel.imagem} alt={props.movel.nome}/>
            <div className="container-direita">
                <h3 className="nome">{props.movel.nome}</h3>
                <h4 className="preço">R$.{props.movel.preço},00</h4>
                <button onClick={() => props.adicionarAoCarrinho(props.movel)}>Carrinho</button>
                <p className="descriçao">{props.movel.descriçao}</p>
            </div>
        </section>
    )
}

export default PaginaDeProduto