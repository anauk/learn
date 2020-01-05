import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Button, Alert} from 'react-native'
import Card from '../components/Card'
import Input from '../components/Input'
import Colors from '../constants/colors'
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = (props) => {

  const [enteredValue, setEnteredValue] = useState('')
  const [confirmed, setConfirmValue] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState()

  const numberEnteredValue = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''))
  }
  const resetInputValue = () => {
    setEnteredValue('')
    setConfirmValue(false)
  }
  const confirmInputValue = () => {
    const choseNumber = parseInt(enteredValue)
    if(isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99){
      Alert.alert('Invalid number', 'Number has to be a number between 1 and 99', [{text: 'Okay', style: 'destructive', onPress: resetInputValue}])
      return
    }
    setConfirmValue(true)
    setSelectedNumber(choseNumber)
    setEnteredValue('')
    Keyboard.dismiss()
  }
  let comfirmedOutput
  if(confirmed){
    comfirmedOutput =
      <Card style={styles.summaryContainer}>
        <Text>Chosen Number:</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title='START GAME'
          onPress={()=> props.onStartGame(selectedNumber)}
          color={Colors.accent}
        />
      </Card>
  }

  return (
    <TouchableWithoutFeedback
    onPress={() => {Keyboard.dismiss()}}
    >
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Naumber</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType={'number-pad'}
          maxLength={2}
          onChangeText={numberEnteredValue}
          value={enteredValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='Reset'
              onPress={resetInputValue}
              color={Colors.primary}/></View>
          <View style={styles.button}>
            <Button
              title='Confirm'
              onPress={confirmInputValue}
              color={Colors.accent}/></View>
        </View>
      </Card>
      {comfirmedOutput}
    </View>
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  input: {
    textAlign: 'center',
    width: 80
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: 100
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  }
})

export default StartGameScreen