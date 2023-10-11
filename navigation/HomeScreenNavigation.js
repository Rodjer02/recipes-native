import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";
import HomeScreen from "../screens/HomeScreen";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

function HeartLogo() {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        padding: 5,
        borderRadius: 999,
        backgroundColor: "#fff",
      }}
    >
      <Icon size={30} name={"heart"} color={"red"} />
    </View>
  );
}
function GoBackButton() {
  const navigation = useNavigation();
  const onPress = () => {
    return navigation.goBack();
  };
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        padding: 5,
        borderRadius: 999,
        backgroundColor: "#fff",
      }}
      onPress={onPress}
    >
      <Icon size={30} name={"left"} color={"yellow"} />
    </TouchableOpacity>
  );
}
const Stack = createNativeStackNavigator();
const HomeScreenNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="RecipeDetail"
        component={RecipeDetailScreen}
        options={{
          headerShown: true,
          headerRight: () => <HeartLogo />,
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => <GoBackButton />,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeScreenNavigation;

const styles = StyleSheet.create({});
