import { Tabs } from "expo-router";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";
import { Text } from "react-native";
import { styles } from "../../styles";
import { COLORS } from "../../constants";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.secondary,
        tabBarStyle: {},
        tabBarInactiveTintColor: COLORS.grey,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-circle"
              size={28}
              color={color}
            />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ ...styles._layoutText, color: color }}>Home</Text>
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="favorite" size={28} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ ...styles._layoutText, color: color }}>
              Favorites
            </Text>
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="upload"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="pluscircle" size={24} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ ...styles._layoutText, color: color }}>Upload</Text>
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="inbox" size={26} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ ...styles._layoutText, color: color }}>Inbox</Text>
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="you"
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="emoji-happy" size={28} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ ...styles._layoutText, color: color }}>You</Text>
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default Layout;
