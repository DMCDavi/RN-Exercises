import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import Parimpar from './componentes/Parimpar'
import { Inverter, MegaSena } from './componentes/Multi'
import Plataforma from './componentes/Plataforma'
import Contador from './componentes/Contador'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import Avo from './componentes/ComunicacaoDireta'
import {TextoSincronizado} from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'
import Flex from './componentes/Flex'

export default createDrawerNavigator({
    Flex: {
        screen: Flex
    },
    ListaFlex:{
        screen: ListaFlex
    },
    TextoSincronizado: {
        screen: TextoSincronizado
    },
    Avo: {
        screen: () => <Avo nome='João' sobrenome='Silva' />
    },
    Evento: {
        screen: Evento
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={18} />
    },
    Plataforma: {
        screen: Plataforma
    },
    Contador: {
        screen: () => <Contador numeroInicial={0}/>
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo!' />
    },
    Parimpar: {
        screen: () => <Parimpar numeros={30} />,
        navigationOptions: { title: 'Par & Ímpar' }
    },
    Simples: {
        screen: () => <Simples texto='Flexível!!!!' />
    }
}, { drawerWidth: 300 })