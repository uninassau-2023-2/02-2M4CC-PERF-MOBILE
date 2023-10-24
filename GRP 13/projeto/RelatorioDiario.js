import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RelatorioDiario = () => {
  const navigation = useNavigation();

  const navigateToRelatorioMensal = () => {
    navigation.navigate('RelatorioMensal');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Relatórios Diários</Text>
      <View style={styles.CaixaAzul}>
        <Text style={styles.tituloSenha}>15/09</Text>
        <Text style={styles.senha}>Senhas</Text>

        {tipoSenha("Emitidas: 57", "Total de Senha Geral", ["Atendidas: 52"])}
        {tipoSenha("Emitidas: 19", "Total de Senha Prioritária", ["Atendidas: 18"])}
        {tipoSenha("Emitidas: 33", "Total de Senha Retirada de Exames", ["Atendidas: 33"])}
        {tipoSenha("3min 17s ", "TM de Senha Geral")}
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Relatórios Mensais" onPress={navigateToRelatorioMensal} />
      </View>
    </View>
  );
}

const tipoSenha = (text, senha, relatorio = []) => (
  <View style={styles.caixaBranca}>
    <Text style={styles.text}>{text}</Text>
    <Text style={styles.relatorio}>{relatorio[0]}</Text>
    <Text style={styles.guiche}>{relatorio[1] || ""}</Text>

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
    marginTop: 30,
    backgroundColor: '#0b4ea5',
    borderRadius: 50,
    alignItems: 'center',
  },
  caixaBranca: {
    width: 340,
    height: 70,
    backgroundColor: 'white',
    marginTop: 50,
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
    borderRadius: 6,
    position: 'absolute',
    top: -30,
  },
  senha: {
    fontSize: 25,
    color: 'white',
    right: 130,
  },
  textoSenha: {
    fontSize: 20,
    color: '#0b4ea5',
    left: 20,
    fontWeight: 'bold',
  },
  relatorio: {
    fontSize: 20,
    color: '#0b4ea5',
    textAlign: 'center',
  },
  guiche: {
    fontSize: 1,
    color: '#0b4ea5',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
 
});

export default RelatorioDiario;
