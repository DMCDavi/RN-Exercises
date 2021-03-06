import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilo/Padrao'
import If from './If'

//São 4 formas de fazer a mesma coisa

//Primeiro método:
// export default props =>
//     props.numero % 2 == 0
//     ? <Text style={Padrao.ex}>Par</Text>
//     : <Text style={Padrao.ex}>Ímpar</Text>



//Segundo método:
// function parOuImpar(num){
//     const v = num % 2 == 0 ? 'Par' : 'Ímpar'
//     return <Text style={Padrao.ex}>{v}</Text>
// }
// export default props =>
//     parOuImpar(props.numero)



//Terceiro método:
function parOuImpar(num){
    if(num % 2 == 0){
        return <Text style={Padrao.ex}>Par</Text>
    }else{
        return <Text style={Padrao.ex}>Ímpar</Text>
    }
}
export default props =>
    parOuImpar(props.numero)

     

//Quarto método:
// export default props =>
//     <View>
//             <If test={props.numero % 2 == 0}>
//                 <Text style={Padrao.ex}>Par</Text>
//             </If>
//             <If test={props.numero % 2 == 1}>
//                 <Text style={Padrao.ex}>Ímpar</Text>
//             </If>
//     </View>


