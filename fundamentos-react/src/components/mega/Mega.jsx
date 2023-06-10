import { useState } from "react"
import FormMega from "./FormMega"
import DisplayMega from "./DisplayMega"
import ResultadoMega from "./ResultadoMega"

export default props => {

    const [numerosMega, setNumerosMega] = useState(6)
    const [resultado, setResultado] = useState(Array(6).fill(0))

    function alterarTotalMega(numerosMega){
        setNumerosMega(numerosMega);
    }

    function gerarNumeroUnico (array) {
        var numero = parseInt(Math.random() * 60) + 1;
        return array.includes(numero) ? gerarNumeroUnico(array) : numero;
      }

    function sortearMega() {
        var numerosSorteados = Array(numerosMega)
           .fill(0)
           .reduce((nuns) => {
                const novoNum = gerarNumeroUnico(nuns)
                return [...nuns, novoNum];
           }, [])
           .sort((a,b) => a - b);
           
        setResultado(numerosSorteados)
    }

    return (
        <div className="mega">
            <FormMega numerosMega={numerosMega} alterarTotal={alterarTotalMega} sortear={sortearMega} />
            <DisplayMega numerosMega={numerosMega}/>
            <ResultadoMega resultadoMega={resultado} />
        </div>
    )
}