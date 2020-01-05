import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native'

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The game is Over!</Text>
      <Text>Number is rounds: {props.roundsNumber}</Text>
      <Text>Number of user: {props.userNumber}</Text>
      <Button title='NEW GAME' onPress={props.onRestart}/>
    </View>
  )
}
const styles = StyleSheet.create ({
screen: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}
})
export default GameOverScreen
