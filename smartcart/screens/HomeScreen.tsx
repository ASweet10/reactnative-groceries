import { View, Text, ScrollView } from "react-native"
import { ListCard } from "../components/ListCard"

export const HomeScreen = () => {
  return (
    <View className="flex-1">

      {/* Header */}
      <View className="px-5 py-4 bg-white shadow flex-row justify-between items-center">
        <Text className="text-2xl font-bold">My lists</Text>
      </View>

      {/* Main list area */}
      <ScrollView className="p-5">
        <ListCard title="Shopping list" progress={10} total={10} />
        <ListCard title="Holidays" progress={2} total={7} />
        <ListCard title="Birthdays" progress={12} total={17} />
        <ListCard title="Mexico" progress={0} total={37} />
      </ScrollView>
    </View>
  )
}