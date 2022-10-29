import HeaderPrimario from '../HeaderPrimario/HeaderPrimario'
import HeaderSecundario from '../HeaderSecundario/HeaderSecundario'
import './Banner.css'

const Banner = (props) => {

    return (
        <header>
            <HeaderPrimario 
                exibir={props.exibir}
                buscarMoveis={props.buscarMoveis}
            />
            <HeaderSecundario
                exibir={props.exibir}
                visivel={props.visivel}    
            />
        </header>
    )
}

export default Banner