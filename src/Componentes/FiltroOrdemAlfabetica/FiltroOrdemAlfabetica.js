import IconAtoB from '../../Icon/IconAtoB'
import IconBtoA from '../../Icon/IconBtoA'
import IconRadioCheck from '../../Icon/IconRadioCheck'
import IconRadioChecked from '../../Icon/IconRadioChecked'

const FiltroOrdemAlfabetica = (props) => {
    return (
        <div className="div-ordem-alfabetica">
            <div className="div-a-z">
                <label for="botao-ordem-a-z">
                    <IconAtoB width="46" height="46"/>
                </label>
                <button onClick={() => props.botaoFiltro("a-z")} id="botao-ordem-a-z">
                    {props.ordem!="a-z" && <IconRadioCheck width="46" height="46"/>}
                    {props.ordem=="a-z" && <IconRadioChecked width="46" height="46"/>}
                </button>
            </div>
            <div className="div-z-a">
                <label for="botao-ordem-z-a">
                    <IconBtoA width="46" height="46"/>
                </label>
                <button onClick={() => props.botaoFiltro("z-a")} id="botao-ordem-z-a">
                    {props.ordem != "z-a" && <IconRadioCheck width="46" height="46"/>}
                    {props.ordem == "z-a" && <IconRadioChecked width="46" height="46"/>}
                </button>
            </div>
        </div>
    )
}

export default FiltroOrdemAlfabetica