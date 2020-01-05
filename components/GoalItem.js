import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
    <View style={styles.inputItem}>
      <Text>
        {props.title}
      </Text>
    </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  inputItem: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    backgroundColor: '#ccc',
    borderColor: 'black'
  }
})
export default GoalItem
