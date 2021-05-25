import React from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatListProps,
} from "react-native";

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  darkTheme?: boolean;
}

function FlatListHeaderComponent({ darkTheme }: MyTasksListProps) {
  return (
    <View>
      <Text style={darkTheme ? styles.headerDark : styles.header}>
        Minhas tasks
      </Text>
    </View>
  );
}


export function MyTasksList({
  tasks,
  onLongPress,
  onPress,
  darkTheme,
}: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            //TODO - use onPress, onLongPress and style props
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={item.done ? styles.taskButtonDone : darkTheme ? styles.taskButtonDoneDark : styles.taskButton}
          >
            <View
              testID={`marker-${index}`}
              //TODO - use style prop
              style={item.done && !darkTheme ? styles.taskMarkerDone : item.done && darkTheme ? styles.taskMarkerDoneDark : styles.taskMarker}
            />
            <Text
              //TODO - use style prop
              style={item.done ? styles.taskTextDone : darkTheme ? styles.taskTextDark : styles.taskText}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      }}
      ListHeaderComponent={<FlatListHeaderComponent darkTheme={darkTheme} />}
      ListHeaderComponentStyle={{
        marginBottom: 20,
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    color: "#3D3D4D",
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
  },
  headerDark: {
    color: "#FF79C6",
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#3D3D4D",
    marginRight: 10,
  },
  taskMarkerDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FF79C6",
    marginRight: 10,
  },
  taskText: {
    color: "#3D3D4D",
  },
  taskTextDark: {
    color: "#FF79C6",
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: "rgba(25, 61, 223, 0.1)",
    flexDirection: "row",
    alignItems: "center",
  },
  taskButtonDoneDark: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: "rgba(255, 121, 198, 0.1)",
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: "#273FAD",
    marginRight: 10,
  },
  taskMarkerDoneDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: "#FF79C6",
    marginRight: 10,
  },
  taskTextDone: {
    color: "#A09CB1",
    textDecorationLine: "line-through",
  },
  taskTextDoneDark: {
    color: "#FF79C6",
    textDecorationLine: "line-through",
  },
});
