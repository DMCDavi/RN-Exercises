import React from 'react'
import {View, Text} from 'react-native'

const fonte = {style: {fontSize: 30 } }

//essa função serve para passar as propriedades do pai para os filhos
function filhosComProps(props) {
    return React.Children.map(props.children, 
        c => React.cloneElement(c, {...props, ...c.props}))
}

export const Filho = props =>
    //ao usar ...fonte, todos os elementos do objeto fonte serão passados como propriedades
    <View>
        <Text {...fonte}> Filho: {props.nome} {props.sobrenome}</Text>
    </View>

export const Pai = props =>
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
        {filhosComProps(props)}
    </View>

export const Avo = props =>
    <View>
        <Text {...fonte}>Avô: {props.nome} {props.sobrenome}</Text>
        <Pai nome='André' sobrenome={props.sobrenome}>
            <Filho nome='Ana' />
            <Filho nome='Gui' />
            <Filho nome='Davi' />
        </Pai>
        <Pai {...props} nome='Pedro'>
            <Filho nome='Rebeca' />
            <Filho nome='Renato' />
        </Pai>
    </View>

export default Avo