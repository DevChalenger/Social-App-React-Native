import { StyleSheet, Text, View } from "react-native";
import { IconButton } from "react-native-paper";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>hey</Text>
      <IconButton />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "red",
  },
});
export default Header;
