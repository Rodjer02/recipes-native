import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Octicons from "react-native-vector-icons/Octicons";
import { colors } from "../assets/constants/colors";
import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import RecipeDetailCard from "../components/RecipeDetailCard/RecipeDetailCard";
import getRecipeDetail from "../lib/getRecipeDetail";
import { useEffect, useState } from "react";

const additionalData = [
  {
    title: "35",
    subtitle: "Mins",
    icon: <Feather name="clock" size={26} />,
  },
  {
    title: "03",
    subtitle: "Servings",
    icon: <Ionicons name="people" size={26} />,
  },
  {
    title: "103",
    subtitle: "Cal",
    icon: <SimpleLineIcons name="fire" size={26} />,
  },
  { title: "", subtitle: "Easy", icon: <Octicons name="stack" size={26} /> },
];

const RecipeDetailScreen = (id) => {
  const [recipeDetail, setRecipeDetail] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getRecipeDetail(id.route.params.id);
      setRecipeDetail(res.meals[0]);
      console.log("meals = ", res.meals[0].strMeal);
    })();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          source={{ uri: recipeDetail.strMealThumb }}
          style={styles.recipeImage}
        />
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>{recipeDetail.strMeal}</Text>
            <Text style={styles.country}>{recipeDetail.strArea}</Text>
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={styles.additionalDataContent}
          >
            {additionalData.map((data, index) => {
              return <RecipeDetailCard key={index} {...data} />;
            })}
          </ScrollView>
          <View>
            <Text style={styles.subhead}>Ingredients</Text>
            {[...Array(20).keys()].map((index) => {
              if (recipeDetail[`strIngredient${index + 1}`]) {
                return (
                  <View key={index} style={styles.ingredientContainer}>
                    <View style={styles.yellowDot} />
                    <Text style={styles.measure}>
                      {recipeDetail[`strMeasure${index + 1}`]}
                    </Text>
                    <Text style={styles.ingredient}>
                      {recipeDetail[`strIngredient${index + 1}`]}
                    </Text>
                  </View>
                );
              }
            })}
          </View>
          <View>
            <Text style={styles.title}>Intructions</Text>
            <Text style={styles.country}>{recipeDetail.strInstructions}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default RecipeDetailScreen;
const styles = StyleSheet.create({
  recipeImage: {
    alignSelf: "center",
    width: "100%",
    height: 400,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  content: { paddingHorizontal: 15, marginTop: 32, gap: 15 },
  title: { fontWeight: "800", fontSize: 28 },
  subhead: { fontWeight: "800", fontSize: 22, marginBottom: 16 },
  country: { color: "gray", fontSize: 16 },
  additionalDataContent: { width: "100%", justifyContent: "space-around" },
  ingredientContainer: { flexDirection: "row", alignItems: "center", gap: 8 },
  yellowDot: {
    backgroundColor: colors.amber700,
    borderRadius: 90,
    width: 10,
    height: 10,
  },
  measure: { fontWeight: "800", fontSize: 16 },
  ingredient: { fontSize: 16 },
});
