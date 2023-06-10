import Membro from './Membro'

export default props => {
    return (
        <div>
            <Membro nome="Pedro" sobrenome={props.sobrenome} />
            {/* Passando o props via spred */}
            <Membro nome="Ana" {...props}/> 
            <Membro nome="Rute" sobrenome="Bezenga" />
        </div>
    )
} 