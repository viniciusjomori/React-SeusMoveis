import { useEffect, useState } from 'react'
import arrayMoveis from '../../ArrayMoveis'
import Slider from '../Slider/Slider'
import SliderProdutos from '../SliderProdutos/SliderProdutos'
import './PaginaInicial.css'


const PaginaInicial = (props) => {

    const cardsApresentaçao = ["/img/apresentaçao.png", "/img/produtos-originais.png", "/img/entrega-segura.png"]
    
    let moveisAleatorios = []
    for (let i = 0; i<10; i++) {
        let numeroAleatorio
        do {
            numeroAleatorio = Math.floor(Math.random()*arrayMoveis.length)
        } while (gerarOutroNumero(moveisAleatorios, numeroAleatorio));
        moveisAleatorios.push(arrayMoveis[numeroAleatorio])
    }

    let [moveis, setMoveis] = useState([])
    useEffect(() => {
        setMoveis(moveisAleatorios)
    },[])

    return (
        <section className="pagina-inicial">
            <h2>SeusMoveis</h2>
            <Slider
                id="slider-apresentaçao"
                cards={cardsApresentaçao}
            />
            <h3>Nossos Produtos!</h3>
            <SliderProdutos
                moveis={moveis}
                abrirPaginaDeProduto={props.abrirPaginaDeProduto}
                adicionarAoCarrinho={props.adicionarAoCarrinho}
            />
        </section>
    )

    function gerarOutroNumero(moveisAleatorios, numeroAleatorio) {
        for (let j = 0; j<moveisAleatorios.length; j++) {
            if (moveisAleatorios[j] == arrayMoveis[numeroAleatorio]) {
                return true
            }
        }
        return false
    }
}

export default PaginaInicial