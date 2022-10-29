import IconNenhumResultado from '../../Icon/IconNenhumResultado'
import './NenhumResultado.css'

const NenhumResultado = (props) => {
    return (
        <section className="nenhum-resultado">
            <h4>Resultado "{props.busca}" não encontrado</h4>
            <IconNenhumResultado width="460" height="460" className="icon"/>
        </section>
    )
}

export default NenhumResultado