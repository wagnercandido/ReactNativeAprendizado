import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList} from 'react-native';
import { isTemplateElement } from '@babel/types';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Nomes: [
        {key: '1', nome: 'Wagner Candido', idade: 26},
        {key: '2', nome: 'Arthur Filho', idade: 26},
        {key: '3', nome: 'David Luna', idade: 26},
        {key: '4', nome: 'Kaique Candido', idade: 26},
        {key: '5', nome: 'Victor Medeiros', idade: 26},
      ]
    };
  }

  renderNome(item) {
    return (
      <View style={styles.viewNomes}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.idade}>{item.idade}, anos</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.flatList} data={this.state.Nomes} renderItem={({item}) => this.renderNome(item)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatList: {
    height: 150
  },
  viewNomes: {
    height: 80,
    padding: 10
  },
  nome: {
    fontSize: 24,
  },
  idade: {
    fontSize: 16,
  }
  
});
