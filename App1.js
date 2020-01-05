/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Button
} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddModal, setIsAddModal] = useState(false)

  const addGoalHandler = (enteredGoal) => {
    if (enteredGoal.length === 0) {
      return
    }
    setCourseGoals(currentGoal => [
      ...currentGoal,
      {id: Math.random().toString(), value: enteredGoal}
      ])
    setIsAddModal(false)
  }

  const removeGoalHandler = goalId => {
    console.log(goalId + 'TO BE DELETED')
    setCourseGoals(currentGoal => {
      return currentGoal.filter((goal) => goal.id != goalId)
    })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddModal(false)
  }
  return (
    <View style={styles.screen}>
      <Button
        title='ADD new Item'
        onPress={() => setIsAddModal(true)}
      />
        <GoalInput
          visible={isAddModal}
          onAddGoal={addGoalHandler}
          onCancel={cancelGoalAdditionHandler}
        />
      <FlatList
        data={courseGoals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
        return <GoalItem
          id={itemData.item.id}
          onDelete={removeGoalHandler}
          title={itemData.item.value}/>
      }}>
      </FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

export default App;
