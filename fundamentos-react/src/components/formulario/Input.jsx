import './Input.css'
import { useState } from "react"

export default props => {

    const [valor, setValor] = useState('Digite o nome')

    function onChange(e){
        setValor(e.target.value)
    }

    function onFocus(e){
        if(e.target.value === 'Digite o nome')
             setValor('')
    }

    function onBlur(e){
        if(e.target.value.trim() === '')
             setValor('Digite o nome')
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div>
                    Componente Controlado <br />
                    <input type="text" value={valor} onChange={onChange} onFocus={onFocus} onBlur={onBlur}/>
                </div>
                <div>
                    Componente só leitura <br />
                    <input type="text" value={valor} readOnly/>
                </div>
                <div>
                    Componente não controlado <br />
                    <input type="text" value={undefined}/>
                </div>
            </div>
        </div>
    )
}