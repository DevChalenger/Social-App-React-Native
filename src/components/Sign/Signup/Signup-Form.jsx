import { Button, StyleSheet, Text, View } from "react-native";
import { gap } from "../../utils/Style-Variable";
import Field from "../Field";

import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <View style={styles.form}>
      <Field label={"User Name"} type={"username-new"} name={""} />
      <Field label={"Email"} type={"email"} name={""} />
      <Field label={"Password"} type={"password"} name={""} />
      <Field
        label={"Confirm Password"}
        type={"password"}
        name={"confirm-password"}
      />
      <Button title="Send" />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    display: "flex",
    flexDirection: "column",
    paddingVertical: 25,
    paddingHorizontal: 10,
    marginVertical: -(gap / 2),
    marginHorizontal: -(gap / 2),
  },
  button: {
    marginTop: 20,
  },
});

export default Form;
