import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Carosel from "./Carosel";
import ActionIcon from "./ActionIcon";
import colors from "../config/color";

function FeedItem({ images, itemId, title, subTitle }) {
  return (
    <View style={styles.container}>
      <Carosel data={images}></Carosel>
      <View style={styles.iconContainer}>
        <ActionIcon iconName="heart-outline" onPress={() => {}} />
        <ActionIcon iconName="purse-outline" onPress={() => {}} />
        <ActionIcon iconName="telegram" onPress={() => {}} />
      </View>
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
  container: {},
  iconContainer: { flexDirection: "row", justifyContent: "flex-end" },
  textContainer: {},
  title: {
    color: colors.dark,
    elevation: 5,
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 5,
  },
  subTitle: {
    color: colors.medium,
    elevation: 5,
    fontSize: 12,
  },
});
export default FeedItem;
