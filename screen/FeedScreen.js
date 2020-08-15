import React from "react";
import { View, StyleSheet } from "react-native";
const feeds = [
  {
    id: "1",
    tags: ["A", "B"],
    imageUrl: {
      detailUrl: "",
      thumbnailUrl: "",
    },
    title: "A Title",
  },
  {},
];
function FeedScreen() {
  return <View style={styles.container}></View>;
}
const styles = StyleSheet.create({
  container: {},
});
export default FeedScreen;
