import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      servico: 0,
      servicos: [
        {nome: 'Alinhamento', valor: 30},
        {nome: 'Balancemento', valor: 20},
        {nome: 'Rodízio de Pneus', valor: 50},
        {nome: 'Troca de Óleo', valor: 90},
      ]
    };
  }

  render() {

    let itemServicos = this.state.servicos.map((sValue, sKey) => {
      return <Picker.item key={sKey} value={sKey} label={sValue.nome} />
    });

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Wagner AutoPeças</Text>
        <Picker selectedValue={this.state.servico} onValueChange={(itemValue, itemIndex) => this.setState({servico: itemValue})}>
          {itemServicos}
        </Picker>
        <Text style={styles.textoSelecte}>R$ {this.state.servicos[this.state.servico].valor}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 35,
    padding: 20,
    textAlign: 'center',
    marginBottom: 20
  },
  textoSelecte: {
    fontSize: 26,
    padding: 10,
  }
});
