import './CardProduto.css'

const CardProduto = (props) => {



    const adicionarAoCarrinhoCard = () => {
        const index = props.carrinho.findIndex(produtoNoCarrinho => produtoNoCarrinho[0] == props.movel)
        if (index == -1) {
            props.adicionarAoCarrinhoBody(props.movel)
        }
    }

    return (
        <div className="card-produto">
            <img src={props.imagem} onClick={() => props.abrirPaginaDeProduto(props.movel)}/>
            <span className="nome" onClick={() => props.abrirPaginaDeProduto(props.movel)}>{props.nome}</span>
            <span className="preço">R$.{props.preço},00</span>
            <button onClick={adicionarAoCarrinhoCard}>Carrinho</button>
        </div>
    )
}

export default CardProduto