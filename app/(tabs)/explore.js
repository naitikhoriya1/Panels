import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const explore = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>explore page</Text>
      <Link href="/accountInfo">
        <Text>Account info</Text>
      </Link>
    </SafeAreaView>
  );
};

export default explore;

const styles = StyleSheet.create({});
