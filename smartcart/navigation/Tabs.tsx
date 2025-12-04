import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Lists from "../screens/Lists";
import { ProfileScreen } from "../screens/ProfileScreen"
import { HomeStack } from "../navigation/HomeStack"
import { BudgetScreen } from "../screens/BudgetScreen"
import { Ionicons } from "@expo/vector-icons"

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
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
  );
}
