import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";

import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";

function Recipe({ elem }) {
  const navigation = useNavigation();
  const onPressCard = () => {
    navigation.navigate("RecipeDetail", { id: elem.idMeal });
    console.log(elem.idMeal);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPressCard}>
      <View>
        <Image style={styles.image} source={{ uri: elem.strMealThumb }} />
      </View>
      <Text style={styles.text}>{elem.strMeal}</Text>
    </TouchableOpacity>
  );
}

export default Recipe;
const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 100,
    objectFit: "cover",
    borderRadius: 10,
  },
  container: {
    marginBottom: 20,
  },
  text: {
    width: 150,
    textAlign: "center",
  },
});
