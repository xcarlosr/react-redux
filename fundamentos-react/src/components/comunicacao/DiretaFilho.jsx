export default props => {
    return (
        <div>
            <span>nome: {props.nome}, </span>
            <span>idade: {props.idade}, </span> 
            <span>Nerde: {props.bool ? 'Verdadeiro' : 'Falso'}!</span>
        </div>
    )
}