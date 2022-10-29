import './Input.css'

const Input = (props) => {
    return (
        <div className="divInput">
            <label for={props.id}>{props.label}</label>
            <input
                id={props.id}
                type={props.tipo}
                required={props.obrigatorio}
            />
        </div>
    )
}

export default Input