export default props => {

    //Pega o componente Else
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    //pega tudo do IF sem o componente Else
    const ifChild = props.children.filter(child => {
        return child !== elseChild
    })

    // console.log(elseChild)

    return props.test ? ifChild : elseChild
}

export const Else = props => props.children