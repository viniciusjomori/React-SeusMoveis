import { filterProps } from 'framer-motion'
import { useState } from 'react'
import IconLixo from '../../Icon/IconLixo'
import './ProdutoNoCarrinho.css'

const ProdutoNoCarrinho = (props) => {

    let [value, setValue] = useState(props.quantidade)

    const inputAlterado = (evento) => {
        const valor = parseInt(evento.target.value, 10)
        setValue(valor)
        props.alterarQuantidade(valor)
    }

    return (
        <tr className="produto-no-carrinho">
            <td onClick={() => props.abrirPaginaDeProduto(props.movel)} className="imagem"><img src={props.imagem} art={props.nome}/></td>
            <td className="nome" onClick={() => props.abrirPaginaDeProduto(props.movel)}><h2>{props.nome}</h2></td>
            <td><h3>R$.{props.preço},00</h3></td>
            <td><h4>{props.categoria}</h4></td>
            <td><label id="quantidade">Qnt</label><input for="quantidade" value={value} type="number" min="1" onChange={inputAlterado} /></td>
            <td onClick={() => props.removerProduto(props.movel)}><IconLixo width="46" height="46"/></td>
        </tr>
    )
}

export default ProdutoNoCarrinho