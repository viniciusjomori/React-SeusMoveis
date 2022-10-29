import { useEffect, useState } from 'react'
import CarrinhoVazio from '../CarrinhoVazio/CarrinhoVazio'
import ProdutoNoCarrinho from '../ProdutoNoCarrinho/ProdutoNoCarrinho'
import './CarrinhoDoCliente.css'

const CarrinhoDoCliente = (props) => {

    var [exibirTotal, setExibirTotal] = useState(0)
    useEffect(() => {
        let total = 0
        props.carrinho.forEach(produtoNoCarrinho => total += produtoNoCarrinho[1]*produtoNoCarrinho[0].preço)
        setExibirTotal(total)
    },[props.carrinho])

    return (
        <section className="carrinho-do-cliente">
            {props.carrinho.length > 0 && <table>
                {props.carrinho.map(movel => <ProdutoNoCarrinho
                    movel={movel[0]}
                    nome={movel[0].nome}
                    imagem={movel[0].imagem}
                    preço={movel[0].preço}
                    categoria={movel[0].categoria}
                    quantidade={movel[1]}
                    abrirPaginaDeProduto={movel => props.abrirPaginaDeProduto(movel)}
                    alterarQuantidade={quantidade => props.alterarQuantidade(quantidade, props.carrinho.findIndex(produtoNoCarrinho => produtoNoCarrinho[0] == movel[0]))}
                    removerProduto={movel => props.removerProduto(movel)}
                />)}
            </table>}
            {props.carrinho.length > 0 && <spam className="total">Total: R$.{exibirTotal},00</spam>}
            {props.carrinho.length == 0 && <CarrinhoVazio exibir={props.exibir}/>}
        </section>
    )



}

export default CarrinhoDoCliente