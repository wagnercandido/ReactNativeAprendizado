import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Slider } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valor:50
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Slider value={this.state.valor} minimumValue={0} maximumValue={100} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
