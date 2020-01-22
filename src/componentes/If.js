import React from 'react'

//Caso o teste seja verdadeiro, a função vai retornar os tudo que tiver dentro da tag <If>
export default props => {
    if(props.test){
        return props.children
    } else {
        return false
    }
}