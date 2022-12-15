import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { Image, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Provider } from "react-redux";
import store from "./src/redux/store";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";

import Header from "./src/components/Header";
import { createStackNavigator } from "@react-navigation/stack";
import MainContainer from "./src/MainContainer";
import LoginContainer from "./src/LoginContainer";
import {
  createDrawerNavigator,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import { Button, IconButton } from "react-native-paper";
import DrawerScreen from "./src/navigator/Drawer";

const Drawer = createDrawerNavigator();
const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="MainContainer"
            screenOptions={({ navigation }) => ({
              headerLeft: (props) => <Header navigation={navigation} />,
            })}
            drawerContent={(props) => <DrawerScreen {...props} />}
          >
            <Drawer.Screen
              name="MainContainer"
              component={MainContainer}
              options={({ navigation }) => ({
                headerStyle: {
                  backgroundColor: "#14213D",
                },

                headerTitle: () => {
                  return (
                    <Text
                      style={{
                        fontWeight: "700",
                        fontSize: 18,
                        color: "white",
                      }}
                    >
                      Social App
                    </Text>
                  );
                },
              })}
            />
            <Drawer.Screen
              name="LoginScreen"
              component={LoginContainer}
              options={{
                headerTintColor: "white",
                headerStyle: {
                  backgroundColor: "#14213D",
                },
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default App;
