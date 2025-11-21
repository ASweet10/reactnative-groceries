import { View, Text, TouchableOpacity } from "react-native";

type Tab = "lists" | "budget" | "profile";

type Props = {
  tab: Tab;
  setTab: (t: Tab) => void;
};

export const BottomTabs = ({ tab, setTab }: Props) => {
  return (
    <View className="flex-row justify-around items-center bg-white py-3 border-t border-gray-200">
      <TabButton label="Lists" active={tab === "lists"} onPress={() => setTab("lists")} />
      <TabButton label="Budget" active={tab === "budget"} onPress={() => setTab("budget")} />
      <TabButton label="Profile" active={tab === "profile"} onPress={() => setTab("profile")} />
    </View>
  );
};

const TabButton = ({
  label,
  active,
  onPress,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
}) => (
  <TouchableOpacity onPress={onPress}>
    <Text className={active ? "text-green-600 font-semibold" : "text-gray-500"}>
      {label}
    </Text>
  </TouchableOpacity>
);
