import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";

const _layout = () => {
  return (
    <View>
      <View style={{ backgroundColor: "black" }}>
        <Text style={{ color: "white" }}>Go Back</Text>
      </View>
      <Slot />
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({});
