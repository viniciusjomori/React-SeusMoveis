import './HeaderPrimario.css'
import Busca from '../Busca/Busca'
import IconCart from '../../Icon/IconCart'
import { useState } from 'react'

const HeaderPrimario = (props) => {

    let [cor, setCor] = useState("black")

    return (
        <section className="header-primario">
            <h1 onClick={() => props.exibir("pagina inicial")}>SeusMoveis</h1>
            <div className="icones-direita">
                <Busca
                    buscarMoveis={props.buscarMoveis}
                />
                <IconCart
                    onClick={() => props.exibir("carrinho")}  
                    color={cor} className="carrinho" 
                    onMouseOver={() => setCor("rgb(45, 45, 45)")} 
                    onMouseOut={() => setCor("black")}
                    width="46" 
                    height="46"
                />
            </div>
        </section>
    )   
}

export default HeaderPrimario