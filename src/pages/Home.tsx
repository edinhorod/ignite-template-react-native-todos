import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Header } from "../components/Header";
import { MyTasksList } from "../components/MyTasksList";
import { TodoInput } from "../components/TodoInput";
import { ButtonDarkTheme } from "../components/ButtonDarkTheme";

interface Task {
  id: number;
  title: string;
  done: boolean;
  darkTheme?: boolean;
}

export function Home() {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [darkTheme, setDarkTheme] = useState(false);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks((oldState) => [...oldState, data]);
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks((oldState) => oldState.filter((task) => task.id !== id));
  }

  function handleDarkTheme() {
    if(darkTheme){
      setDarkTheme(false);
    } else{
      setDarkTheme(true);
    }
    console.log(darkTheme);
  }

  return (
    <View style={darkTheme ? styles.containerDark : styles.container}>
      <Header darkTheme={darkTheme} />

      <TodoInput addTask={handleAddTask} darkTheme={darkTheme} />

      <MyTasksList
        tasks={tasks}
        darkTheme={darkTheme}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
      <ButtonDarkTheme title="Dark Theme" onPress={handleDarkTheme}  darkTheme={darkTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerDark: {
    flex: 1,
    backgroundColor: "#1F1F1F",
  },
});
