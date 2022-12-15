import {
  Button,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import Field from "../Field";

import { Primary_Color } from "../../utils/Style-Variable";

import { useForm, Controller } from "react-hook-form";

const Form = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <View style={styles.form}>
      <Field
        label={"Email"}
        type={"email"}
        name={"email"}
        control={control}
        errors={errors}
      />
      <Field
        label={"Password"}
        type={"password"}
        name={"password"}
        control={control}
        errors={errors}
      />

      <View style={styles.button}>
        <Button
          color={Primary_Color}
          disabled={errors ? false : true}
          title={"Submit"}
          onPress={handleSubmit(submitForm)}
        />
      </View>
    </View>
  );
};

const gap = 10;

const styles = StyleSheet.create({
  form: {
    display: "flex",
    flexDirection: "column",
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginVertical: -(gap / 2),
    marginHorizontal: -(gap / 2),
    borderRadius: 12.5,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,

    elevation: 5,
  },
  button: {
    marginVertical: 10,
    overflow: "hidden",
    borderRadius: 40,
  },
  text: {
    textAlign: "center",
  },
});

export default Form;
