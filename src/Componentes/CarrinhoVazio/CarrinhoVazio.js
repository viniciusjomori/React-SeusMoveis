import IconCarrinhoVazio from '../../Icon/IconCarrinhoVazio'
import './CarrinhoVazio.css'

const CarrinhoVazio = (props) => {
    return (
        <section className="carrinho-vazio">
            <h2>Seu carrinho está vazio</h2>
            <IconCarrinhoVazio width="350" height="350"/>
            <spam onClick={() => props.exibir("produtos")}>Confira nosso catálogo de produtos!</spam>
        </section>
    )
}

export default CarrinhoVazio