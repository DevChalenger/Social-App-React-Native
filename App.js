import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { Image, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import About from "./src/screens/About";
import Home from "./src/screens/Home";
import Login from "./src/screens/Sign/Login";
import Signup from "./src/screens/Sign/Signup";

import { Provider } from "react-redux";
import store from "./src/redux/store";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import Header from "./src/components/Header";

const Tab = createBottomTabNavigator();
const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
              tabBarActiveTintColor: "#e91e63",
            }}
          >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{ headerTitle: Header }}
            />
            <Tab.Screen
              name="Login"
              component={Login}
              options={{ headerTitle: Header }}
            />
            <Tab.Screen
              name="Signup"
              component={Signup}
              options={{ headerTitle: Header }}
            />
            <Tab.Screen
              name="About"
              component={About}
              options={{ headerTitle: Header }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default App;
