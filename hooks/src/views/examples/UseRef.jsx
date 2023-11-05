import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


const merge = (v1, v2) => {
    return [...v1].map((e, i) => {
        return `${e}${v2[i] || ""}`    
    }).join("") 
}


const UseRef = (props) => {

    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const [value3, setValue3] = useState("")

    const count = useRef(0)
    const imput1 = useRef(null)
    const imput2 = useRef(null)


    //É criada uma referencia para o objeto imput. 
    // console.log(imput1.current)
    // console.log(imput2.current)

    // Só é alterado quando um evento alterar o estado do value1
    useEffect(() => {
        count.current = count.current
        imput2.current.focus()
    }, [value1])
    
    useEffect(() => {
        count.current++
        imput1.current.focus()
    }, [value2])

    // Altera o valor sem precisar disparar um evento
    // count.current = count.current + 1

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input"
                    ref={imput1}
                    value={value1} onChange={e => setValue1(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <input type="text" className="input"
                        ref={imput2}
                        value={value2} onChange={e => setValue2(e.target.value)} />
                </div>
            </div>    

        </div>
         

    )
}

export default UseRef
