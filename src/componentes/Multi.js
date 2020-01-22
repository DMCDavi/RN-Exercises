import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

export const Inverter = props => {
    const inv = props.texto.split('').reverse().join('')
    return <Text style={Padrao.ex}>{inv}</Text>
}

export const MegaSena = props => {
    const[min, max] = [1, 60]
    //cria um array com a quantidade de numeros que lhe for passado ou 6
    //alem disso, preenche elementos com o numero 0
    const numeros = Array(props.numeros || 6).fill(0)

    //let serve para declarar uma variavel que apenas será utilizada naquele bloco
    //logica para aleatorizar cada elemento do array
    for(let i = 0; i < numeros.length; i++){
        let novo = 0
        //so sai do while quando o numero gerado aleatoriamente for diferente dos numeros ja presentes no array
        //.includes(num) checa se no array existe o numero passado como parametro
        while(numeros.includes(novo)){
            //formula para gerar um numero aleatorio entre dois outros numeros
            novo = Math.floor(Math.random() * (max - min + 1)) + min
        }
        numeros[i] = novo
    }
    //ordena o array em ordem crescente
    numeros.sort((a, b) => a - b)
    //retorna uma string dos numeros sorteados
    return <Text style={Padrao.ex}>{numeros.join(', ')}</Text>
}