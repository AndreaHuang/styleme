import React from "react";
import { View, StyleSheet, Text } from "react-native";

import AppButton from "../components/AppButton";
import Card from "../components/Card";
import Screen from "../components/Screen";
import Carosel from "../components/Carosel";
import FeedItem from "../components/FeedItem";

const item = {
  id: 2,
  images: [
    {
      id: "image 1",
      url:
        "https://wl-brightside.cf.tsp.li/resize/728x/jpg/7eb/51c/0563055842a00791915d20e970.jpg",
    },
    {
      id: "image 2",
      url:
        "https://cdn.sparesinmotion.com/sites/default/files/test-product-test.png",
    },
  ],
  title:
    "A very long very long very long very longvery long very longvery long very longvery long very longvery long very long Title",
  subTitle:
    "A very long very longvery long very longvery long very longvery long very longvery long very longvery long very longSubTitle",
};

function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <FeedItem
        images={item.images}
        title={item.title}
        subTitle={item.subTitle}
      />
      <AppButton title="Login"></AppButton>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default LoginScreen;
