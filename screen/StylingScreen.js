import React from "react";

import { View, StyleSheet } from "react-native";
import * as Yup from "yup";

import colors from "../config/color";
import Screen from "../components/Screen";
import {
  AppFormField,
  AppSubmitButton,
  AppForm,
  AppFormPicker,
} from "../components/forms";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";

const validationSchema = Yup.object({
  height: Yup.number().required().min(100).max(200).label("Height"),
  heightUnit: Yup.string().required().label("Height Unit"),
  weight: Yup.number().required().min(1).max(400).label("Weight"),
  weightUnit: Yup.string().required().label("Weight Unit"),
  birthDate: Yup.object().required().nullable().label("Birth Date"),
  gender: Yup.string().required().label("Gender"),
  location: Yup.string().required().label("Location"),

  //   styles: Yup.array().required().min(1).label("Preferred Styles"),
  //   occations: Yup.array.required().label("Occations"),
  //   options: Yup.object().required().nullable().label("Options"),
  images: Yup.array().label("Images"),
});

function StylingScreen() {
  return (
    <Screen>
      <AppForm
        initialValues={{
          birthDate: "",
          description: "",
          gender: "",
          height: "",
          heightUnit: "KG",
          images: [],
          location: "",
          weight: "",
          weightUnit: "CM",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <AppFormField
          keyboardType="numeric"
          maxLength={255}
          name="height"
          placeholder="Height"
        />

        <AppFormField
          keyboardType="numeric"
          maxLength={3}
          name="weight"
          placeholder="Weight"
        />
        {/* <AppFormPicker
          items={categories}
          name="category"
          numberOfLines={3}
          PickerItemComponent={CategeoryPickItem}
          placeholder="Category"
        /> */}
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <AppFormImagePicker name="images" />
        <AppSubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default StylingScreen;
