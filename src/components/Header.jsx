import { StyleSheet, Text, View } from "react-native";
import { IconButton, MD3Colors } from "react-native-paper";

const Header = ({ navigation }) => {
  return (
    <IconButton
      icon="account-circle"
      iconColor={MD3Colors.primary100}
      size={40}
      onPress={() => navigation.openDrawer()}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
export default Header;
