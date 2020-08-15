import React from "react";
import { View, StyleSheet } from "react-native";
import FeedList from "../components/FeedList";
import Screen from "../components/Screen";
const feeds = [
  {
    id: 1,
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
    title: "A very short Title",
    subTitle: "A very short SubTitle",
  },
  {
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
  },
];
function FeedScreen() {
  return (
    <Screen>
      <FeedList feeds={feeds} />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default FeedScreen;
