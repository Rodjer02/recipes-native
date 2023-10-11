import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreenNavigation from "./HomeScreenNavigation";
import FavoritesScreen from "../screens/FavoritesScreen";
import Icon from "react-native-vector-icons/MaterialIcons";
const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreenNavigation}
        options={{
          tabBarIcon: () => <Icon size={20} name={"home"} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: () => <Icon size={20} name={"favorite"} color={"red"} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
