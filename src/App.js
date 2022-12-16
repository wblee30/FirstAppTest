import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
            <Text>나의 첫 앱 </Text>
            <Text>실행 완료!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#E0E0E0',
    padding: 32,
    paddingBottom:0,
    margin: 128,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    flexDirection: 'row'
  },
});
