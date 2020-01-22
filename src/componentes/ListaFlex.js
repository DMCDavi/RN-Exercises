import React from 'react'
import {ScrollView, View, FlatList, Text} from 'react-native'

const alunos = [
    {id: 1, nome: 'João', nota: 7.9},
    {id: 2, nome: 'Ana', nota: 9.1},
    {id: 3, nome: 'Carlos', nota: 7.0},
    {id: 4, nome: 'Davi', nota: 7.7},
    {id: 5, nome: 'Marcos', nota: 1.9},
    {id: 6, nome: 'Lula', nota: 9.9},
    {id: 7, nome: 'Rone', nota: 7.5},
    {id: 8, nome: 'Neide', nota: 7.8},
    {id: 9, nome: 'Celi', nota: 8.9},

    {id: 11, nome: 'João', nota: 7.9},
    {id: 12, nome: 'Ana', nota: 9.1},
    {id: 13, nome: 'Carlos', nota: 7.0},
    {id: 14, nome: 'Davi', nota: 7.7},
    {id: 15, nome: 'Marcos', nota: 1.9},
    {id: 16, nome: 'Lula', nota: 9.9},
    {id: 17, nome: 'Rone', nota: 7.5},
    {id: 18, nome: 'Neide', nota: 7.8},
    {id: 19, nome: 'Celi', nota: 8.9},
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 70,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',
    
    // Flex

    alignItems: 'center',
    //flexDirection muda o 'main axis' que é a referencia (linha ou coluna)
    //em que as propriedades do css vao trabalhar
    flexDirection: 'row',
    justifyContent: 'space-between',

}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}} >Nota: {props.nota}</Text>
    </View>

export default props => {
    //funcao para renderizar cada item da lista
    const renderItem = ({item}) => {
        return <Aluno {...item} />
    }
    return (
        //keyExtractor serve para pegar o id 
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}