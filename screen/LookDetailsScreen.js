import React from "react";
import { StyleSheet } from "react-native";
import LookDetails from "../components/LookDetails";
import Screen from "../components/Screen";
const lookItem = {
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
  breakdown: [
    {
      id: "breakdown 1",
      image: {
        url:
          "https://cdn.sparesinmotion.com/sites/default/files/test-product-test.png",
      },
      title: "Breakdown item 1 ",
      subTitle: "price/size/brand/name/ add to bag ",
    },
    {
      id: "breakdown 2",
      image: {
        url:
          "https://wl-brightside.cf.tsp.li/resize/728x/jpg/7eb/51c/0563055842a00791915d20e970.jpg",
      },
      title: "Breakdown item 1 ",
      subTitle: "price/size/brand/name/ add to bag ",
    },
  ],
};

function LookDetailsScreen() {
  return (
    <Screen>
      <LookDetails look={lookItem} />
    </Screen>
    //same carosel view
    //seperate item price/size/brand/name/ add to bag
    //similar looks, other related link
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default LookDetailsScreen;
