import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { colors } from "../../assets/constants/colors";

function Category({ elem, setActiveCategory, isActive }) {
  const onClick = () => {
    setActiveCategory(elem.strCategory);
  };
  const backgroundColor = isActive
    ? colors.amber400
    : "rgba(177, 177, 177, 0.4)";

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onClick}>
      <View style={[styles.cardImg, { backgroundColor }]}>
        <Image style={styles.image} source={{ uri: elem.strCategoryThumb }} />
      </View>
      <View>
        <Text style={styles.cardTitle}>{elem.strCategory}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Category;

const styles = StyleSheet.create({
  cardContainer: {
    width: "maxContent",
    height: "maxContent",
    marginRight: 10,
  },
  cardImg: {
    width: 100,
    height: 100,
    borderRadius: 999,
    backgroundColor: "rgba(177,177,177,0.4)",
    marginBottom: 10,
    padding: 20,
    overflow: "hidden",
  },

  image: {
    width: 100,
    height: 100,
    position: "absolute",
    left: 0,
    objectFit: "contain",
  },
  cardTitle: {
    textAlign: "center",
  },
});
