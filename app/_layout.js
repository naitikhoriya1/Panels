import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import { Slot, Stack } from "expo-router";

const _layout = () => {
  return (
    <GestureHandlerRootView>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="(nobottombar)"
          options={{
            headerShown: true,
            title: "Account Info",
            headerBackTitle: "Go Back",
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
};

export default _layout;

const styles = StyleSheet.create({});
