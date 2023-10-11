import { StyleSheet, Text, View, ScrollView } from "react-native";
import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import React from "react";

const FavoritesScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text>Favorites</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#fff",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
