import { useState } from 'react'
import IconLupa from '../../Icon/IconLupa'
import './Busca.css'

const Busca = (props) => {

    const enter = (e) => {
        if (e.key === "Enter") {
            props.buscarMoveis(e.target.value)
        }
    }

    let [cor, setCor] = useState("black")

    return (
        <div className='busca'>
            <input 
                id="lupa-input"
                type="text"
                onKeyDown={enter}
            />
            <label for="lupa-input">
                <IconLupa
                    color={cor} 
                    onMouseOver={() => setCor("rgb(45, 45, 45)")} 
                    onMouseOut={() => setCor("black")} 
                    width="46" 
                    height="46"
                />
            </label>
        </div>
    )
}

export default Busca