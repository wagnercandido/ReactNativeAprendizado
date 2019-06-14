import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Switch } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valor: false
    };
  }

  render() {

   

    return (
      <View style={styles.container}>
        <Switch thumbTintColor="#0000FF" onTintColor="red" value={this.state.valor} onValueChange={(v) => this.setState({valor: v})} />
        <Text>{(this.state.valor) ? "Selecionado" : "Não selecionado"}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});