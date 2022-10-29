const FiltroCategoria = (props) => {
    return (
        <div className="div-select">
            <select onChange={((e) => props.filtrarCategoria(e.target.value))}>
                {props.itens.map((item) => <option>{item}</option>)}
            </select>
        </div>
    )
}

export default FiltroCategoria