import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Caption, Drawer, IconButton, Title } from "react-native-paper";
import userData from "../mocks/MOCKS_USER.json";

const DrawerScreen = (props) => {
  const fakeUser = userData[0];

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.close}>
          <IconButton
            icon="close"
            size={30}
            onPress={() => {
              props.navigation.closeDrawer();
            }}
          />
        </View>
        <View style={styles.mainSection}>
          <Avatar.Image source={fakeUser.img_profil} />
          <View>
            <Title>{fakeUser.fullName}</Title>
            <Caption>@{fakeUser.userName}</Caption>
          </View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section>
        <DrawerItem
          icon={({ color, size }) => (
            <IconButton icon="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  close: {
    display: "flex",
    alignItems: "flex-end",
  },
  mainSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginVertical: 10,
  },
});

export default DrawerScreen;
