import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class MeuComponent extends Component {
  render() {
    return (
      <Text>Bem vindo, {this.props.nome}</Text>
    );
  }
}

export default class App extends Component {

  constructor(props) {
    super(props);
    console.log('Constructor Called.');

    this.state = { name: 'Wagner' };

    this.alteraTexto = this.alteraTexto.bind(this);

  }

  alteraTexto() {

    this.state.name = 'Wagner Candido';

    this.setState(this.state);
  }

  componentWillMount() {
    console.log('componentWillMount called.');
  }

  componentDidMount() {
    console.log('componentDidMount called.');
  }

  componentWillReceiveProps(nextProp) {
    console.log('componentWillReceiveProps called.', nextProp);
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log('shouldComponentUpdate called.');
    return true;
  }

  componentWillUpdate(nextProp, nextState) {
    console.log('componentWillUpdate called.');
  }

  componentDidUpdate(prevProp, prevState) {
    console.log('componentDidUpdate called.');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount called.');
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch called.');
  }

  render() {
    console.log('Render called');
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <MeuComponent nome={this.state.name} />
        <View>
          <Button title="sign in" onPress={this.alteraTexto} color="#4d58c1" />
        </View>
      </View>
    );
  }
}