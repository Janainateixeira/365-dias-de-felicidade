import React from 'react';
import { Image, StyleSheet, SafeAreaView, Dimensions, View } from 'react-native';
import Texto from '../../../componentes/Texto';
import Login from '../../../componentes/Login';
import textos from '../../../mocks/textos';

const width = Dimensions.get('screen').width;

export default function Detalhes({ subtitulo, login, senha, tela_mostra }) {
    return <>
        <SafeAreaView>
            <Texto style={estilos.subtitulo}>{subtitulo}</Texto>

            <View style={estilos.logEsenha}>
                <Login>{ textos.detalhes.login }</Login>
                <Texto style={estilos.login}>{login}</Texto>                
                <Texto style={estilos.senha}>{senha}</Texto>
            </View>          
            <Image source={tela_mostra} style={estilos.tela_mostra} />
        </SafeAreaView>
    </>
}
const estilos = StyleSheet.create({
    subtitulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 22,
        lineHeight: 476,
        color: "#899e44",
        fontWeight: "bold",
        marginTop: -150,
    },
    descrição: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    //caixa de texto de entrada de e-mail
    logEsenha: {
        flexDirection: "column",
        paddingVertical: 70,
        alignItems: "center",
    },
    tela_mostra: {
        width: "100%",
        height: 1252 / 2675 * width,
        lineHeight: 22
    },
})