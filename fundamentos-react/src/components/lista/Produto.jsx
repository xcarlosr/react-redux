import './Produtos.css'
import arrayProdutos from '../../data/produtos'

export default _ => {

    const listProdutos = arrayProdutos.map((produto, i) => {
        return <tr key={produto.id} className={i % 2 === 0 ? 'par' : 'impa'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.valor.toFixed(2).replace('.', ',')}</td>
                </tr>
    })

    return (
        <div className="tbProdutos">
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nome</th>
                        <th>valor</th>
                    </tr>     
                </thead>
                <tbody>
                    {listProdutos}                    
                </tbody>
            </table>
        </div>
    )
}