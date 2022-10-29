import arrayMoveis from '../../ArrayMoveis'
import CardProduto from '../CardProduto/CardProduto'
import Filtro from '../Filtro/Filtro'
import NenhumResultado from '../NenhumResultado/NenhumResultado'
import './Produtos.css'

const Produtos = (props) => {

    return (
        <section>
            {(props.moveis.length > 0) && <Filtro filtrar={props.filtrar}/>}
            {(props.moveis.length > 0) && <div className="produtos">
                {props.moveis.map(movel => <CardProduto
                    movel={movel}
                    nome={movel.nome}
                    imagem={movel.imagem}
                    preço={movel.preço}
                    carrinho={props.carrinho}
                    abrirPaginaDeProduto={props.abrirPaginaDeProduto}
                    adicionarAoCarrinhoBody={movel => props.adicionarAoCarrinhoApp(movel)}
                />)}
            </div>}
            {props.moveis.length == 0 && <NenhumResultado busca={props.busca}/>}
        </section>

    )
}

export default Produtos