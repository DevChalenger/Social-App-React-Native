import { StyleSheet, Text, TextInput, View } from "react-native";

const Field = ({ label, type }) => {
  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} autoComplete={type}></TextInput>
    </View>
  );
};

const gap = 10;

const styles = StyleSheet.create({
  formControl: {
    marginVertical: gap / 2,
    marginHorizontal: gap / 2,

    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  label: {
    marginVertical: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 5,

    backgroundColor: "white",
    borderRadius: 4,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    outlineStyle: "none",
  },
});

export default Field;
