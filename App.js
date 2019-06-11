import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '', pass: '', error: '', success: '' };

    this.sign = this.sign.bind(this);

  }

  sign() {
    let state = this.state;
    let usuario = 'wagnercandido';
    let userPhone = '8388482251'
    let senha = '1234';

    if ((state.username == usuario || state.username == userPhone) && state.pass == senha) {
      state.error = '';
      state.success = 'Login Success';
    } else {
      state.success = '';
      state.error = 'username or password invalid';
    }

    this.setState(state);

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome my first project</Text>
        <View style={styles.loginInputs}>
          <Text style={styles.title}>Sign In</Text>
          <TextInput style={styles.login} placeholder="username or phone" onChangeText={(username) => this.setState({ username })} />
          <TextInput style={styles.login} placeholder="password" onChangeText={(pass) => this.setState({ pass })} />
          <Text style={styles.error}>{this.state.error}</Text>
          <Button title="sign in" onPress={this.sign} color="#4d58c1"/>
          <Text style={{ textAlign: "center", marginTop: 10 }}>forget my password</Text>
        </View>
        <Text style={styles.success}>{this.state.success}</Text>
        <Text style={styles.signup}>Sign Up</Text>
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
  button: {
    margin: 5,
    borderRadius: 30,
    backgroundColor: 'black'
  },
  loginInputs: {
    flex: 2
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    margin: 30,
    fontWeight: 'bold'
  },
  login: {
    height: 40,
    width: 250,
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 10,
    textAlign: 'center',
    // fontWeight: 'bold',
    marginBottom: 10,
  },
  signup: {
    flex: 1,
    fontSize:18,
    // fontWeight: 'bold'
  },
  error: {
    textAlign: 'center',
    marginBottom: 10,
    color: 'red'
  },
  success: {
    textAlign: 'center',
    margin: 30,
    color: 'green',
    fontWeight: 'bold'
  }
});
