import IconCarta from '../../Icon/IconCarta'
import IconFacebook from '../../Icon/IconFacebook'
import IconInstagram from '../../Icon/IconInstagram'
import IconTelefone from '../../Icon/IconTelefone'
import Input from '../Input/Input'
import './Contato.css'

const Contato = (props) => {
    return (
        <section className="contatos">
            <ul>
                <li>
                    <IconCarta width="46" height="46"/>
                    seusmoveis@email.com
                </li>
                <li>
                    <IconTelefone width="46" height="46"/>
                    (99)99999-9999
                </li>
                <li>
                    <IconInstagram width="46" height="46"/>
                    Siga-nos no Instagra
                </li>
                <li>
                    <IconFacebook width="46" height="46" />
                    Siga-nos no Facebook
                </li>
            </ul>     
            <form>
                <Input
                    id="nome"
                    label="Digite seu nome completo"
                    tipo="text"
                    obrigatorio="false"
                />
                <Input
                    id="email"
                    label="insira seu email"
                    tipo="email"
                    obrigatorio="true"
                />
                <Input
                    id="telefone"
                    label="Insira seu telefone"
                    tipo="tel"
                    obrigatorio="false"
                />
                <label for="mensagem">Digite sua mensagem</label>
                <textarea cols="70" rows="10" id="mensagem" class="input-padrao" required/>
                
                <button>Enviar</button>
            </form>
        </section>
    )
}

export default Contato