import { StyleSheet, Text, View } from "react-native";
import Form from "../../components/Sign/Signup/Signup-Form";

const Signup = () => {
  return (
    <View style={styles.signup}>
      <Form />
    </View>
  );
};

const styles = StyleSheet.create({
  signup: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    paddingVertical: 25,
    paddingHorizontal: 35,
  },
});

export default Signup;
