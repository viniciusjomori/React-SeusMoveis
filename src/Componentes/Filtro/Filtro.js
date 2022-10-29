import { useState } from 'react'
import FiltroCategoria from '../FiltroCategoria/FiltroCategoria'
import FiltroOrdemAlfabetica from '../FiltroOrdemAlfabetica/FiltroOrdemAlfabetica'
import FiltroPreço from '../FiltroPreço/FiltroPreço'
import './Filtro.css'

const Filtro = (props) => {

    let [filtrarCategoria, setFiltrarCategoria] = useState("")
    let [ordem, setOrdem] = useState("")

    const botaoFiltro = (botao) => {
        if (botao != ordem) {
            setOrdem(botao)
        } else {
            setOrdem("")
        }
    }

    const filtrar = () => {
        props.filtrar(filtrarCategoria, ordem)
    }

    return (
        <div className="filtro">
            <FiltroCategoria
                filtrarCategoria={(option) => setFiltrarCategoria(option)}
                itens={["categoria", "armario", "mesa", "cadeira", "cama", "estante"]}
            />
            <FiltroPreço
                botaoFiltro={botaoFiltro}
                ordem={ordem}
            />
            <FiltroOrdemAlfabetica
                botaoFiltro={botaoFiltro}
                ordem={ordem}
            />
            <button className="botao-filtrar" onClick={filtrar}>Filtrar</button>
        </div>
    )
}

export default Filtro