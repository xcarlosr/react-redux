import IF, {Else} from './if'

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <IF test={usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
                <Else test={!usuario.nome}>
                    Seja bem vindo <strong>Amigão</strong>!
                </Else>
            </IF>
        </div>
    )
}