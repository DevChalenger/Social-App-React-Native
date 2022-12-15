import About from "./screens/Main/About";
import Home from "./screens/Main/Home";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Chat from "./screens/Main/Chat";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#53D8FB",
        tabBarShowLabel: true,
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#14213D",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
          tabBarLabel: "Chat",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="About"
        component={About}
        options={{
          headerShown: false,
          tabBarLabel: "About",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="information"
              color={color}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainContainer;
