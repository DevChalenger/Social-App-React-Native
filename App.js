import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import About from "./src/pages/About";
import Home from "./src/pages/Home";
import Login from "./src/pages/Sign/Login";
import Signup from "./src/pages/Sign/Signup";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="About" component={About} />
        {/*   <Stack.Screen name="ForgotPassword" component={} />
        <Stack.Screen name="" component={} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
