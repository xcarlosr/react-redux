import DiretaFilho from "./DiretaFilho"

export default props => {

    return (
        <div>
            <DiretaFilho nome='Pedero' idade={22} bool={true} />    
            <DiretaFilho nome='João' idade={18} bool={false} />    
        </div>
    )
}