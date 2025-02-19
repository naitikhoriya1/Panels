import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View } from "react-native";
import { SafeAreaView, StyleSheet } from "react-native-web";

const Tab = createMaterialTopTabNavigator();

export default function Index() {
  return (
    <View style={{ flex: 1, marginTop: 35 }}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Library" component={Library} />
        <Tab.Screen name="Liked" component={Liked} />
        <Tab.Screen name="suggested" component={suggested} />
      </Tab.Navigator>
    </View>
  );
}

function Library() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Library</Text>
    </View>
  );
}

function Liked() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Liked!</Text>
    </View>
  );
}

function suggested() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>suggested</Text>
    </View>
  );
}
const styles = StyleSheet.create({});
