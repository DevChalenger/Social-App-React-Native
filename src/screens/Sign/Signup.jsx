import { Link } from "@react-navigation/native";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Form from "../../components/Sign/Signup/Signup-Form";

const Signup = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.signup}>
        <Form navigation={navigation} />
        <Text style={styles.text}>
          Already have a Account{" "}
          <Link to={{ screen: "Login" }} style={styles.link}>
            SignIn
          </Link>
        </Text>
      </View>
    </ScrollView>
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
  text: {
    fontSize: 15,
    margin: 20,
    textAlign: "center",
  },
  link: {
    fontWeight: "bold",
    color: "blue",
  },
});

export default Signup;
