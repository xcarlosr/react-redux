export default props => {

    //Forma tradicional para pegar os valores do props
    // const result = parseInt(Math.random() * (props.max - props.min)) + props.min
    
    // pegando os valores com destructoring do javascript
    const { min, max } = props
    const result = parseInt(Math.random() * (max - min)) + min

    return (
        <>
            <h2>Resultado Aleatório</h2>
            <p>Valor mínimo: {min}</p>
            <p>Valor máximo: {max}</p>
            <p>Valor sorteado: {result}</p>
        </>
    )
}

