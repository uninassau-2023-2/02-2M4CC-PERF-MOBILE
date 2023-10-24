import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  const [mostrarQuadrado, setMostrarQuadrado] = useState(false);

  const exibirAlerta = () => {
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.barraVerde}>
        <Text style={styles.titulo}>Projeto 1 - Mobile</Text>
      </View>
      <View style={styles.container}>
        {mostrarQuadrado ? (
          <View style={styles.alunos}>
            <Text style={{ fontSize: 16}}>Ana Carla-01570147</Text>
             <Text style={{ fontSize: 16 }}>Luana Vitória-01565426</Text>
              <Text style={{ fontSize: 16 }}>Thomas Lineker-01527189</Text>
               <Text style={{ fontSize: 16}}>Vinícius Borba-01556075</Text>
          </View>
        ) : (
          <TouchableOpacity style={styles.botao} onPress={() => setMostrarQuadrado(true)}>
            <Text style={styles.botaoTexto}>Alerta</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.barraApp}>
        <View style={styles.icones}>
          <Icon name="vpn-key" size={24} color="black" />
          <Text style={styles.icone2}>Senhas</Text>
        </View>
        <View style={styles.icones}>
          <Icon name="description" size={24} color="black" />
          <Text style={styles.icone2}>Relatórios</Text>
        </View>
        <View style={styles.icones}>
          <Icon name="info" size={24} color="black" />
          <Text style={styles.icone2}>Sobre</Text>
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
  barraVerde: {
    backgroundColor: '#3ba26c',
    alignItems: 'flex-start',
    paddingTop: 45,
    paddingBottom: 20,
    paddingLeft: 10,
  },
  titulo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  barraApp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f6f6f6',
  },
  icones: {
    alignItems: 'center',
  },
  icone2: {
    marginTop: 5,
  },
  botao: {
    backgroundColor: '#3ba26c',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    alignSelf: 'center',
  },
  botaoTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  
});
