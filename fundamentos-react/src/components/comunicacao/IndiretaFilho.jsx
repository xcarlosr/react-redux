

export default props => {

    const gerarIdade = () => parseInt(Math.random() * (15) + 45)
    const isNerd = () => Math.random() > 0.5

    return (
        <div>
            <div><strong>Filho</strong></div>
            <button onClick={_ => props.informacoesPai("Carlos", gerarIdade(), isNerd())}>
                Fornecer Informações
            </button>
        </div>
    )
}