import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>Welcome my first project</Text> */}
        <View style={styles.header}>
          <Text style={styles.title}>Primeiro App</Text>
        </View>
        <ScrollView>
          <View style={styles.section1}>
            <Text style={styles.texto}>Primeira Section</Text>
          </View>
          <View style={styles.section2}>
            <Text style={styles.texto}>Segunda Section</Text>
          </View>
          <View style={styles.section1}>
            <Text style={styles.texto}>Terceira Section</Text>
          </View>
          <View style={styles.section2}>
            <Text style={styles.texto}>Quarta Section</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: '#FFF'
  },
  section1: {
    backgroundColor: '#0000ff',
    height: 300,
  },
  section2: {
    backgroundColor: '#BBB',
    height: 300,
  },
  header: {
    backgroundColor: 'red',
    height: 50,
  }
});
