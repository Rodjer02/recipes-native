import React from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import getRecipes from "../../lib/getRecipes";
import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    (async () => {
      console.log("Server is running");
      const resRecipes = await getRecipes();
      setRecipes(resRecipes.meals);
    })();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recipes</Text>
      <ScrollView
        style={styles.recipeList}
        columnWrapperStyle={styles.recipeListColumnWrapper}
      >
        <View style={styles.recipesContainer}>
          {recipes.map((elem, id) => {
            return <Recipe elem={elem} key={id} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}

Recipes.propTypes = {};

export default Recipes;
const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    gap: 20,
  },
  heading: {
    fontWeight: "600",
    fontSize: 20,
  },
  recipeList: {
    flex: 1,
    gap: 18,
  },
  recipeListColumnWrapper: {
    justifyContent: "space-between",
    gap: 12,
    flex: 2,
  },
  recipesContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});
