import { Button, StyleSheet, Text, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Signup"
        onPress={() => navigation.navigate("Signup", { name: "Jane" })}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
