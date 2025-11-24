import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<any, "ListDetail">;

export const ListDetailScreen = ({ route, navigation }: Props) => {
  const { listId, title } = route.params || { listId: "1", title: "List" };

  return (
    <View className="flex-1 bg-gray-100">
      <View className="px-5 py-4 bg-white shadow flex-row justify-between items-center">
        <Text className="text-xl font-bold">{title}</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text className="text-green-600">Done</Text>
        </TouchableOpacity>
      </View>

      <View className="p-5">
        {/* placeholder for items; add-new button below */}
        <Text className="text-gray-600 mb-4">Items for list {listId} (not functional yet)</Text>

        <TouchableOpacity className="bg-blue-500 rounded-full px-5 py-3 self-end">
          <Text className="text-white font-semibold">+ ADD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
