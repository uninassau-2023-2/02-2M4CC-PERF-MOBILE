import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UltimasSenhasChamadas = () => {
  const navigation = useNavigation();

 
  const navigateToRelatoriosDiarios = () => {
    navigation.navigate('RelatorioDiario');
  };

  return (
    <View style={styles.container}>
      <View style={styles.CaixaAzul}>
        <View style={styles.caixaBranca}>
          <Text style={styles.textoNome}>Senha Prioritária (SP)</Text>
          <Text style={styles.textoSenha}>Senha:230915-SP</Text>
          <Text style={styles.textoGuiche}>Guichê 05</Text>
          <Text style={styles.textoTM}>TM:5/15min</Text>
        </View>
        <View style={styles.caixaBranca}>
          <Text style={styles.textoNome}>Senha para Retirada de Exames (SE)</Text>
          <Text style={styles.textoSenha}>Senha:230925-SE</Text>
          <Text style={styles.textoGuiche}>Guichê 05</Text>
          <Text style={styles.textoTM}>TM:varia em 1/5min</Text> 
        </View>
        <View style={styles.caixaBranca}>
          <Text style={styles.textoNome}>Senha Geral (SG)</Text>
          <Text style={styles.textoSenha}>Senha:231010-SG</Text>
          <Text style={styles.textoGuiche}>Guichê 03</Text>
          <Text style={styles.textoTM}>TM:varia em 3/5min</Text> 
        </View>
        <View style={styles.caixaBranca}>
          <Text style={styles.textoNome}>Senha Prioritária (SP)</Text>
          <Text style={styles.textoSenha}>Senha:231010-SP</Text>
          <Text style={styles.textoGuiche}>Guichê 01</Text>
          <Text style={styles.textoTM}>TM:5/15min</Text> 
        </View>
        <View style={styles.caixaBranca}>
          <Text style={styles.textoNome}>Senha para Retirada de Exames (SE)</Text>
          <Text style={styles.textoSenha}>Senha:230925-SE</Text>
          <Text style={styles.textoGuiche}>Guichê 02</Text>
          <Text style={styles.textoTM}>TM:varia em 1/5min</Text> 
        </View>
      
        <View style={styles.buttonContainer}>
          <Button title="Relatórios Diários" onPress={navigateToRelatoriosDiarios} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 26,
    marginTop: 200,
    right: 10,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#0b4ea5',
  },
  CaixaAzul: {
    width: 440,
    height: 740,
    backgroundColor: '#0b4ea5',
    alignItems: 'center',
  },
  caixaBranca: {
    width: 349,
    height: 110, 
    backgroundColor: 'white',
    margin: 14,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoNome: {
    fontSize: 18,
    color: '#0b4ea5',
    marginBottom: 5, 
  },
  textoSenha: {
    fontSize: 18,
    color: '#0b4ea5',
  },
  textoGuiche: {
    fontSize: 19,
    color: '#0b4ea5',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  textoTM: {
    fontSize: 14,
    color: '#0b4ea5',
    left: 82,
  },
  buttonContainer: {
    marginTop: 1, 
  },
});

export default UltimasSenhasChamadas;
