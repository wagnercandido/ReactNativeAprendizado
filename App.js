import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SectionList } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Nomes: [
        {
          title: 'A', data: [
            { key: '2', nome: 'Arthur Filho', idade: 26 },
            { key: '4', nome: 'Aique Candido', idade: 26 },
            { key: '5', nome: 'Airton Medeiros', idade: 26 },
          ]
        },
        {
          title: 'B', data: [
            { key: '1', nome: 'Bruno ', idade: 26 },
            { key: '2', nome: 'Biboe ', idade: 26 },
            { key: '3', nome: 'Bavid ', idade: 26 },
            { key: '4', nome: 'Baique', idade: 26 },
          ]
        },
        {
          title: 'C', data: [
            { key: '1', nome: 'Candido', idade: 26 },
            { key: '2', nome: 'Carlos Filho', idade: 26 },
            { key: '3', nome: 'CaiqueLuna', idade: 26 },
            { key: '5', nome: 'Cleber Medeiros', idade: 26 },
          ]
        },
      ]
    };
  }


  listSectionRender(section) {
    return (
      <Text style={styles.section}>Letra {section.title}</Text>
    );
  }

  listRender(item) {
    return (
      <Text style={styles.nome}>{item.nome} - {item.idade} anos</Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList style={styles.flatList} sections={this.state.Nomes} renderItem={({item}) => this.listRender(item)} renderSectionHeader={({ section }) => this.listSectionRender(section)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nome: {
    fontSize: 18,
    padding: 5
  },
  section: {
    fontSize: 14,
    backgroundColor: '#CCC',
    padding: 10
  }

});
