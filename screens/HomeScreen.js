import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Categories from "../components/Categories/Categories";

import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import { useEffect, useState } from "react";
import getCatigories from "../lib/getCatigories";

import Recipes from "../components/Recipes/Recipes";

const HomeScreen = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    (async () => {
      const res = await getCatigories();
      setCategories(res.categories);
      setActiveCategory(res.categories[0].strCategory);
    })();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Image
              style={styles.avatar}
              source={require("../assets/images/avatar.png")}
            />
            <Icon style={styles.bill} name="bell-o" />
          </View>
          <View style={styles.wrapContainer}>
            <Text style={styles.subTitle}>Hello, Noman</Text>
            <Text style={styles.title}>
              Make your own food, stay at{" "}
              <Text style={styles.yellowText}>home</Text>
            </Text>
          </View>
          <View style={styles.searchBox}>
            <TextInput style={styles.input} placeholder="Search any recipe" />
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={getCatigories}
            >
              <Icon style={styles.searchBtn} name="search" />
            </TouchableOpacity>
          </View>
          <Categories
            categories={categories}
            setActiveCategory={setActiveCategory}
            activeCategory={activeCategory}
          ></Categories>
          <Recipes />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  wrapContainer: {
    width: "100%",
  },
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    // justifyContent: "flex-start",
    // alignItems: "center",
    gap: 20,
    backgroundColor: "#fff",
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerContainer: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  subTitle: {
    fontSize: 14,
  },
  title: {
    fontSize: 36,
    fontWeight: "600",
  },
  yellowText: {
    color: "#ffb300",
  },
  avatar: {
    width: 50,
    height: 50,
  },
  searchBox: {
    width: "100%",
    flexDirection: "row",
  },
  input: {
    backgroundColor: "rgba(158, 141, 150, 0.43)",
    width: "100%",
    padding: 10,
    borderRadius: 50,
  },
  searchBtn: {
    fontSize: 24,
  },
  btnContainer: {
    position: "absolute",
    top: "8%",
    right: "1.3%",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 999,
  },
  bill: {
    fontSize: 24,
  },
});
