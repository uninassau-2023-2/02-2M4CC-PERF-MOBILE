import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const alunos = [
    { id: '1', nome: 'Ana Carla', matricula: '01570147' },
    { id: '2', nome: 'Luana Vitória', matricula: '01565426' },
    { id: '3', nome: 'Thomas Lineker', matricula: '01527189' },
    { id: '4', nome: 'Vinícius Borba', matricula: '01556075' },
  ];

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.barraAzul}>
        <Text style={styles.titulo}>Projeto 1 - Mobile</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('./logo/totem2.jpg')} style={styles.logo} />
          <Text style={styles.imageText}>
            Este aplicativo foi desenvolvido como parte da avaliação para a disciplina de Desenvolvimento Móvel.
          </Text>
        </View>
        <Text style={styles.contribuicao}>Contribuíram com este projeto:</Text>
        <View style={styles.alunonome}>
          {alunos.map((aluno) => (
            <View key={aluno.id} style={styles.alunoicone}>
              <View style={styles.iconContainer}>
                <Icon name="user" size={20} color="#333" style={styles.icon} />
              </View>
              <Text style={styles.alunoItem}>
                {aluno.nome} - {aluno.matricula}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.barraApp}>
        <View style={styles.info1}>
          <Text style={styles.info2}>Inicial</Text>
        </View>
        <View style={styles.info1}>
          <Text style={styles.info2}>Relatórios</Text>
        </View>
        <View style={styles.info1}>
          <Text style={styles.info2}>Sobre</Text>
        </View>
      </View>
      <View style={styles.linhaBranca} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 75,
    paddingLeft: 20,
  },
  barraAzul: {
    backgroundColor: '#02779e',
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
  imagem: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  barraApp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f6f6f6',
  },
  info1: {
    alignItems: 'center',
  },
  info2: {
    marginTop: 16,
  },
  linhaBranca: {
    height: 5,
  },
  alunonome: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 0,
    marginTop: 20,
  },
  alunoicone: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    marginRight: 8,
  },
  icon: {
    fontSize: 20,
  },
  alunoItem: {
    fontSize: 16,
    marginLeft: 20,
  },
  logo: {
    width: 100,
    height: 300,
    marginBottom: 100,
  },
  imageContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 200,
  },
  imageText: {
    margin: 10,
    fontSize: 16,
  },
  contribuicao: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
