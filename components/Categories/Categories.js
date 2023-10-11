import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FadeInDown } from "react-native-reanimated";
import Category from "../Category/Category";

const Categories = ({ categories, setActiveCategory, activeCategory }) => {
  return (
    <ScrollView
      entering={FadeInDown.duration(500)}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((elem, index) => {
        const isActive = activeCategory === elem.strCategory;
        return (
          <Category
            elem={elem}
            key={index}
            setActiveCategory={setActiveCategory}
            isActive={isActive}
          />
        );
      })}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
