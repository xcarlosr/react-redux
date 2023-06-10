import arrayAlunos from '../../data/alunos'

export default _ => {

    const listAlunos = arrayAlunos.map(aluno => {
        return  <li key={aluno.id}>
                    {aluno.id}) {aluno.nome} -&gt; {aluno.nota}
                </li>
     })

    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {listAlunos}
            </ul>
        </div>
    )
}