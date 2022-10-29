import './FiltroPreço.css'
import IconSetaBaixoSolido from '../../Icon/IconSetaBaixoSolido'
import IconSetaBaixoTransparente from '../../Icon/IconSetaBaixoTransparente'
import IconSetaCimaSolido from '../../Icon/IconSetaCimaSolido'
import IconSetaCimaTransparente from '../../Icon/IconSetaCimaTransparente'
import IconSifrao from '../../Icon/IconSifrao'

const FiltroPreço = (props) => {
    return (
        <div className="div-preço">
            <button onClick={() => props.botaoFiltro("mais-barato")} id="mais-barato">
                {props.ordem!="mais-barato" && <IconSetaBaixoTransparente width="46" height="46"/>}
                {props.ordem=="mais-barato" && <IconSetaBaixoSolido width="46" height="46"/>}
            </button>
            <label for="mais-barato">
                <IconSifrao width="46" height="46"/>
            </label>
            <button onClick={() => props.botaoFiltro("mais-caro")} id="mais-caro">
                {props.ordem!="mais-caro" && <IconSetaCimaTransparente width="46" height="46"/>}
                {props.ordem=="mais-caro" && <IconSetaCimaSolido width="46" height="46"/>}
            </button>
        </div>
    )
}

export default FiltroPreço