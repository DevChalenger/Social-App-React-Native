import { Link } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Form from "../../components/Sign/Login/Login-Form";

const Login = ({ navigation }) => {
  return (
    <View style={styles.login}>
      <Form navigation={navigation} />
      <Text style={styles.text}>
        Not Account yet{" "}
        <Link to={{ screen: "Signup" }} style={styles.link}>
          SignUp
        </Link>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    maxWidth: 500,
    width: "100%",
    marginHorizontal: "auto",
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

export default Login;
