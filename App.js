import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import About from "./src/screens/About";
import Home from "./src/screens/Home";
import Login from "./src/screens/Sign/Login";
import Signup from "./src/screens/Sign/Signup";

import { Provider } from "react-redux";
import store from "./src/redux/store";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";

const Stack = createNativeStackNavigator();

const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
};
export default App;
