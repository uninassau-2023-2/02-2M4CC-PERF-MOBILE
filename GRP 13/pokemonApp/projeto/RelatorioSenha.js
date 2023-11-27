import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Relatório Senha</Text>

      <View style={styles.CaixaAzul}>
        <Text style={styles.tituloSenha}>15/09</Text>

        {tipoSenha("Emissão - 15/09 - 14h17", "231010-SG", ["Atendimento - 15/09 - 14h28", "Guichê 03"])}
        {tipoSenha("Emissão - 15/09 - 15h23", "230915-SP", ["Atendimento - 15/09 - 15h29", "Guichê 05"])}
        {tipoSenha("Emissão - 15/09 - 14h49", "230925-SE", ["Atendimento - 15/09 - 14h58", "Guichê 05"])}
        {tipoSenha("Emissão - 15/09 - 14h17", "231010-SG", ["Atendimento - 15/09 - 14h28", "Guichê 03"])}
      </View>
    </View>
  );
}

const tipoSenha = (text, senha, relatorio = []) => (
  <View style={styles.caixaBranca}>
    <Text style={styles.text}>{text}</Text>
    <Text style={styles.relatorio}>{relatorio[0]}</Text>
    <Text style={styles.guiche}>{relatorio[1]}</Text>

    <View style={styles.miniRetangulo}>
      <Text style={styles.textoSenha}>{senha}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 26,
    paddingTop: 395,
    right: 70,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#0b4ea5',
  },
  tituloSenha: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
    fontWeight: 'bold',
  },

  CaixaAzul: {
    width: 440,
    height: 1000,
    marginTop: 40,
    backgroundColor: '#0b4ea5',
    borderRadius: 50,
    alignItems: 'center',
  },

  caixaBranca: {
    width: 340,
    height: 80, 
    backgroundColor: 'white',
    marginTop: 65,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 19,
    color: '#0b4ea5',
  },

  miniRetangulo: {
    width: 340,
    height: 28,
    backgroundColor: 'white',
    borderRadius: 10,
    position: 'absolute',
    top: -30,
  },

  textoSenha: {
    fontSize: 20,
    color: '#0b4ea5',
    left: 120,
    fontWeight: 'bold',
  },

  relatorio: {
    fontSize: 16,
    color: '#0b4ea5',
    textAlign: 'center',
  },

  guiche: {
    fontSize: 18,
    color: '#0b4ea5',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});
