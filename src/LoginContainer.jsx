import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Sign/Login";
import Signup from "./screens/Sign/Signup";

const Stack = createNativeStackNavigator();

const LoginContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default LoginContainer;
