import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Senhas = () => {
  const navigation = useNavigation();

  const tipoSenha = (text, isButton = false) => {
    if (isButton) {
      return (
        <Button
          title={text}
          onPress={() => navigation.navigate('UltimasSenhasChamadas')}
          style={styles.BotaodeSenhas} 
          
        />
      );
    } else {
      return (
        <View style={styles.caixaBranca}>
          <Text style={styles.text}>{text}</Text>
        </View>
      );
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Setembro 2023</Text>
      <View style={styles.dataContainer}>
        {calendario("18", "Seg")}
        {calendario("19", "Ter")}
        {calendario("20", "Qua")}
        {calendario("21", "Qui")}
        {calendario("22", "Sex")}
      </View>
      <View style={styles.CaixaAzul}>
        <Text style={styles.tituloSenha}>Senhas</Text>
        {tipoSenha("Senha Geral (SG)")}
        {tipoSenha("Senha Prioritária (SP)")}
        {tipoSenha("Senha para Retirada de Exames (SE)")}
        {tipoSenha("Últimas Senhas Chamadas", true)}
      </View>
    </View>
  );
}
const calendario = (data, dia) => (
  <View style={styles.datas}>
    <Text style={styles.text}> {data} </Text>
    <Text style={styles.text}> {dia} </Text>
  </View>
);

const tipoSenha= (text) => (
  <View style={styles.caixaBranca}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

        <Button
          title="Ir para Últimas Senhas Chamadas"
          onPress={() => navigation.navigate('UltimasSenhasChamadas')}
          
          />

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
    fontSize: 30,
    color: 'white',
    marginBottom: 10,
    fontWeight: 'bold',
  },

  CaixaAzul: {
    width: 440,
    height: 880,
    marginTop: 100,
    backgroundColor: '#0b4ea5',
    borderRadius: 50,
    alignItems: 'center',
  },

  caixaBranca: {
    width: 370,
    height: 39,
    backgroundColor: 'white',
    marginTop: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    color: '#0b4ea5',
  },

  dataContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    
  },

  datas: {
    alignItems: 'center',
    margin: 10,
  },

});

export default Senhas;
