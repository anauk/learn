import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Colors from "../constants/colors";

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.accent,
    padding: 10,
    marginVertical: 10
  },
  number: {
    fontSize: 22,
    color: Colors.primary
  }
})
export default NumberContainer