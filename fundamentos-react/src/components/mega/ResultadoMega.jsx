import '../mega/Mega.css'


export default props => {

    const numeros = props.resultadoMega;
    console.log(numeros)
    return (
        <div className="circulo">
            <ul>
                {numeros.map((numero,index) => (
                    <li key={index}>
                        {numero}
                    </li>
                ))}

            </ul>
        </div>
    )
}