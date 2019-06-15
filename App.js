import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';

class MeuComponent extends Component {
  render() {
    return (
      <Text>{this.props.propriedade}</Text>
    );
  }
}

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 

      textState : 'Welcome my first project',
      
    };

    this.alteraTexto = this.alteraTexto.bind(this);

  }

  alteraTexto() {

    this.state.textState = 'Texto Após clique';

    this.setState(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcome}>

          <MeuComponent propriedade={this.state.textState}></MeuComponent>
          <Button title="sign in" onPress={this.alteraTexto} color="#4d58c1" />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  welcome: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  
});