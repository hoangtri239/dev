// Loading.js
import React { Component } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

export default Loading

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})