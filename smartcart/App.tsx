import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStack } from "./navigation/HomeStack";
import { BudgetScreen } from "./screens/BudgetScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ color, size }) => {
                if (route.name === "Lists") {
                  return <Ionicons name="list" size={size} color={color} />;
                }
                if (route.name === "Budget") {
                  return <Ionicons name="cash" size={size} color={color} />;
                }
                return <Ionicons name="person" size={size} color={color} />;
              },
              tabBarActiveTintColor: "#10B981", // green-500
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen name="Lists" component={HomeStack} />
            <Tab.Screen name="Budget" component={BudgetScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </QueryClientProvider>
  );
}