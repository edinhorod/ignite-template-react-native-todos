import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ButtonDarkThemeProps extends TouchableOpacityProps {
  title: string;
  darkTheme: boolean;
}

export function ButtonDarkTheme({ title, darkTheme, ...rest }: ButtonDarkThemeProps) {
  return (
    <>
      <TouchableOpacity style={darkTheme ? styles.darkButtonTheme : styles.darkButton} activeOpacity={0.7} {...rest}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  darkButton: {
    backgroundColor: "#273FAD",
    padding: 15,
    alignItems: "center",
  },
  darkButtonTheme: {
    backgroundColor: "#483C67",
    padding: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
});
