export default function ComParametro ( props) {

    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'

    const notaAjustada = Math.ceil(props.nota);

    return (
        <div id="app">
            <h2>{props.titulo}</h2>
            <p>
                <strong>{props.aluno} </strong>
                Nota
                <strong> {notaAjustada} </strong>
                e está
                <strong> {status}</strong>
            </p>

        </div>
    )    
}