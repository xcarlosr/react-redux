export default props => {
    return (
        <div>
            <div>
                <label htmlFor="totalSorteio">números: </label>
                <input id="totalSorteio"
                        min={6}
                        max={15}
                        type="number"
                        value={props.numerosMega}
                        onChange={e => props.alterarTotal(+e.target.value)} />
                <div>
            </div>
                <button onClick={_ => props.sortear()}>Sortear Mega</button>
            </div>
        </div>
    )
}