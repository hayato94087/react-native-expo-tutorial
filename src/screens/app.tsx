import { type FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";

const App: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>Hello, World!</Text>
      <Text style={styles.text}>
        Open up app.tsx to start working on your app!
      </Text>{" "}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});

registerRootComponent(App);
