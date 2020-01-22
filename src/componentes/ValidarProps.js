import React from 'react'
import propTypes from 'prop-types'
import { Text } from 'react-native'

const ValidarProps = props =>
    <Text style={{fontSize: 35}}>
        {props.label}
        {props.ano + 2000}

    </Text>

//caso nenhuma valor para label seja passado, vai ficaar Ano: como padrão
ValidarProps.defaultProps = {
    label: 'Ano: '
}

ValidarProps.propTypes = {
    //a propriedade ano agora é marcada como numero e como requerida
    ano: propTypes.number.isRequired
}

export default ValidarProps