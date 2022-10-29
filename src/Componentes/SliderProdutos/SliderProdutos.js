import { useRef, useState } from 'react'
import IconDireitaCirculo from '../../Icon/IconDireitaCirculo'
import IconEsquerdaCirculo from '../../Icon/SetaEsquerdaCirculo'
import './SliderProdutos.css'

const SliderProdutos = (props) => {

    const sliderProdutos = useRef(null)

    const handleLeftClick = (e) => {
        e.preventDefault()
        sliderProdutos.current.scrollLeft -= sliderProdutos.current.offsetWidth
    }

    const handleRightClick = (e) => {
        e.preventDefault()
        sliderProdutos.current.scrollLeft += sliderProdutos.current.offsetWidth
    }

    return (
        <>
            <div className="slider-produtos" ref={sliderProdutos}>
                {props.moveis.map(movel => {
                    return (
                        <div className="item">
                            <img src={movel.imagem} alt={movel.nome} onClick={() => props.abrirPaginaDeProduto(movel)}/>
                            <span className="nome" onClick={() => props.abrirPaginaDeProduto(movel)}>{movel.nome}</span>
                            <span className="preço">R$.{movel.preço},00</span>
                            <button onClick={() => props.adicionarAoCarrinho(movel)}>Carrinho</button>
                        </div>
                    )
                })}
            </div>
            <div className="buttons">
                <button className="botao-left" onClick={handleLeftClick}>
                   <IconEsquerdaCirculo width="46" height="46"/>
                </button>
                <button className="botao-right" onClick={handleRightClick}>
                    <IconDireitaCirculo width="46" height="46"/>
                </button>
            </div>
        </>
    )
}

export default SliderProdutos