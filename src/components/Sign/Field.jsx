import { StyleSheet, Text, TextInput, View } from "react-native";
import { Controller } from "react-hook-form";
import { Correct_Color, Error_Color } from "../utils/Style-Variable";

const Field = ({ control, name, label, errors }) => {
  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        defaultValue={""}
        control={control}
        name={name}
        rules={{
          required: { value: true, message: `${label} field is required` },
          pattern: {
            value: "",
            message: `${label} field must be in correct format`,
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.input,
              errors[name] ? styles.errorField : styles.correctField,
            ]}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors[name] && <Text style={styles.error}>{errors[name].message}</Text>}
    </View>
  );
};

const gap = 20;

const styles = StyleSheet.create({
  formControl: {
    marginVertical: gap / 2,
  },
  label: {
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 15,
  },
  input: {
    paddingHorizontal: 10,
    borderColor: "#00000020",
    borderWidth: 1,
    paddingVertical: 5,
    backgroundColor: "white",
    borderRadius: 7,

    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 10,
  },
  errorField: {
    shadowColor: Error_Color,
  },
  correctField: {
    shadowColor: Correct_Color,
  },
  error: {
    textAlign: "center",
    marginTop: 15,
    fontWeight: "bold",
    fontStyle: "italic",
    color: Error_Color,
  },
});

export default Field;
