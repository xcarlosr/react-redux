import { useState } from "react"
import IndiretaFilho from "./IndiretaFilho"



export default props => {

    
    const [nome, setNome] = useState('Sem Nome')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)
    
    
    function infomacoes(nome, idade, nerd){
        // console.log(nome, idade, nerd)
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div><strong>Pai</strong></div>  
            <div><span>nome: {nome}, </span></div>
            <div><span>idade: {idade}, </span> </div>    
            <div><span>Nerde: {nerd ? 'Verdadeiro' : 'Falso'}!</span></div>
            <IndiretaFilho informacoesPai={infomacoes} />    
        </div>
    )
}