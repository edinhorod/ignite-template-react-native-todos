import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";

interface HeaderProps {
  darkTheme?: boolean;
}

export function Header({ darkTheme }: HeaderProps) {
  return (
    <View style={darkTheme ? styles.headerDark : styles.header}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: "Poppins-SemiBold" }]}>
        do
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: "#273FAD",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerDark: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: "#483C67",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 24,
    color: "#FFF",
    fontFamily: "Poppins-Regular",
  },
});
