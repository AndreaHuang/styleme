import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";

import colors from "../config/color";
import defaultStyles from "../config/styles";

const width = defaultStyles.dimension.width;
const height = defaultStyles.dimension.height;
const itemHeight = defaultStyles.card.itemHeight;

function Card({ image, title, subTitle }) {
  console.log(width, height, itemHeight);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image.url }}></Image>
      <View style={styles.textContainer}>
        {title && (
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
        )}
        {subTitle && (
          <Text numberOfLines={3} style={styles.subTitle}>
            {subTitle}
          </Text>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 5,
    width: width - 20,
    height: itemHeight,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  image: {
    borderRadius: 10,
    height: itemHeight,
    width: width - 20,
    resizeMode: "contain",
  },
  textContainer: {
    position: "absolute",
    bottom: 10,
    margin: 10,
    left: 5,
  },
  title: {
    color: colors.white,
    elevation: 5,
    fontWeight: "bold",
    fontSize: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 2,
    marginBottom: 5,
  },
  subTitle: {
    color: colors.white,
    elevation: 5,
    fontSize: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
});
export default Card;
