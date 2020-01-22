import React from 'react'
import {View, Text } from 'react-native'
import Padrao from '../estilo/Padrao'

//props.texto serve para chamar o parametro que a função recebe
// export default function(props) {
//     return <Text>{props.texto}</Text>
// }

//Essa é outra forma de escrever uma função
export default props => 
    <View>
        <Text style={Padrao.ex}>Arrow 1: {props.texto}</Text>
        <Text style={Padrao.ex}>Arrow 2: {props.texto}</Text>
    </View>
    
        

