import { useEffect, useRef } from 'react'
import './HeaderSecundario.css'

const HeaderSecundario = (props) => {

    const home = useRef(null)
    const produtos = useRef(null)
    const contato = useRef(null)
    const quemSomos = useRef(null)


    useEffect(() => {
        switch(props.visivel) {
            case "pagina inicial":
                home.current.style.textDecoration="underline";
                produtos.current.style.textDecoration="";
                contato.current.style.textDecoration="";
                quemSomos.current.style.textDecoration="";
                break;
            case "produtos":
                home.current.style.textDecoration="";
                produtos.current.style.textDecoration="underline";
                contato.current.style.textDecoration="";
                quemSomos.current.style.textDecoration="";
                break;
            case "contato":
                home.current.style.textDecoration="";
                produtos.current.style.textDecoration="";
                contato.current.style.textDecoration="underline";
                quemSomos.current.style.textDecoration="";
                break;
            case "quem somos":
                home.current.style.textDecoration="";
                produtos.current.style.textDecoration="";
                contato.current.style.textDecoration="";
                quemSomos.current.style.textDecoration="underline";
                break;
            default:
                home.current.style.textDecoration="";
                produtos.current.style.textDecoration="";
                contato.current.style.textDecoration="";
                quemSomos.current.style.textDecoration="";
                break;
        }
    },[props.visivel])

    return (
        <section>
            <div className="header-secundario-links">
                <h2 onClick={() => props.exibir("pagina inicial")} ref={home}>Home</h2>
                <h2 onClick={() => props.exibir("produtos")} ref={produtos}>Produtos</h2>
                <h2 onClick={() => props.exibir("contato")} ref={contato}>Contato</h2>
                <h2 onClick={() => props.exibir("quem somos")} ref={quemSomos}>Quem Somos?</h2>
            </div>
        </section>
    )
}

export default HeaderSecundario