import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Membros da Equipe</Text>
      
      <View style={styles.CaixaAzul}>
        <View style={styles.caixaBranca}>
          <Image source={require('./Fotos/Luana.jpg')} style={styles.Fotos} />
          <View style={styles.infoContainer}>
            <Text style={styles.textoNome}>Luana Vitória</Text>
            <Text style={styles.textoMatricula}>01565426</Text>
          </View>
        </View>
        <View style={styles.caixaBranca}>
          <Image source={require('./Fotos/Ana.jpg')} style={styles.Fotos} />
          <View style={styles.infoContainer}>
            <Text style={styles.textoNome}>Ana Carla</Text>
            <Text style={styles.textoMatricula}>01570147</Text>
          </View>
        </View>
        <View style={styles.caixaBranca}>
          <Image source={require('./Fotos/Borba.jpg')} style={styles.Fotos} />
          <View style={styles.infoContainer}>
            <Text style={styles.textoNome}>Vinícius Borba</Text>
            <Text style={styles.textoMatricula}>01556075</Text>
          </View>
        </View>
        <View style={styles.caixaBranca}>
          <Image source={require('./Fotos/Thomas.jpg')} style={styles.Fotos} />
          <View style={styles.infoContainer}>
            <Text style={styles.textoNome}>Thomas Lineker</Text>
            <Text style={styles.textoMatricula}>01527189</Text>
          </View>
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
    paddingTop: 395,
    right: 10,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#0b4ea5',
  },

  CaixaAzul: {
    width: 440,
    height: 890,
    marginTop: 100,
    backgroundColor: '#0b4ea5',
    borderRadius: 50,
    alignItems: 'center',
  },

  caixaBranca: {
    width: 320, 
    height: 110,
    flexDirection: 'row', 
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  infoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  Fotos: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 5, 
    right: 18,
  
  },

  textoNome: {
    fontSize: 18,
    color: '#0b4ea5',
    marginBottom: 5,
  },

  textoMatricula: {
    fontSize: 16,
    color: '#0b4ea5',
  },
});
