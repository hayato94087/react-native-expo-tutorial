import React, { type FC } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  type GestureResponderEvent,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type ButtonProps = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
};

export const IconButton: FC<ButtonProps> = (props) => {
  return (
    <Pressable style={styles.iconButton} onPress={props.onPress}>
      <MaterialIcons name={props.icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{props.label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLabel: {
    color: "#fff",
    marginTop: 12,
  },
});
