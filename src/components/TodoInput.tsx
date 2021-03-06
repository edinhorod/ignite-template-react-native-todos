import React, { useState } from "react";
import {
  Alert,
  Image,
  Platform,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

import checkIcon from "../assets/icons/Check.png";

interface TodoInputProps extends TextInputProps {
  addTask: (task: string) => void;
  darkTheme?: boolean;
}

export function TodoInput({ addTask, darkTheme, ...rest }: TodoInputProps) {
  const [task, setTask] = useState("");

  function handleAddNewTask() {
    //TODO - Call addTask and clean input value
    // console.log('teste HHH', task)
    if(task !== ''){
      addTask(task);
      setTask('');
    } else{
      Alert.alert('Atenção', 'Digite uma tarefa!')
    }
  }

  return (
    <View
      style={[
        styles.inputContainer,
        Platform.OS === "ios"
          ? styles.inputIOSShadow
          : styles.inputAndroidShadow,
      ]}
    >
      <TextInput
        {...rest}
        style={darkTheme ? styles.inputDark : styles.input}
        placeholder="Adicionar novo todo..."
        placeholderTextColor={darkTheme ? "#fff" : "#000"}
        returnKeyType="send"
        onChangeText={setTask}
        value={task}
        onSubmitEditing={handleAddNewTask}
        //TODO - use value, onChangeText and onSubmitEditing props
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={darkTheme ? styles.addButtonDark : styles.addButton}
        //TODO - onPress prop
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#F5F4F8",
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#F5F4F8",
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    color: '#000',
  },
  inputDark: {
    flex: 1,
    backgroundColor: "#34313D",
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    color: '#fff',
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputAndroidShadow: {
    elevation: 5,
  },
  addButton: {
    backgroundColor: "#3FAD27",
    height: 50,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  addButtonDark: {
    backgroundColor: "#988BC7",
    height: 50,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
