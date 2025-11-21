import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View } from "react-native";
import './global.css';
import { HomeScreen } from "./screens/HomeScreen";
import { BudgetScreen } from "./screens/BudgetScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { BottomTabs } from "./components/BottomTabs";

export default function App() {
  const [tab, setTab] = useState<"lists" | "budget" | "profile">("lists");

  return (
    <View className="flex-1 bg-gray-100">
      {tab === "lists" && <HomeScreen />}
      {tab === "budget" && <BudgetScreen />}
      {tab === "profile" && <ProfileScreen />}

      <BottomTabs tab={tab} setTab={setTab} />

      <StatusBar style="auto" />
    </View>
  );
}
