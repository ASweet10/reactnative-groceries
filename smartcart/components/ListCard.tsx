import { Text, View, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  progress: number;
  total: number;
};

export const ListCard = ({ title, progress, total }: Props) => {
  const percent = total === 0 ? 0 : (progress / total) * 100;

  return (
    <TouchableOpacity className="bg-white rounded-xl p-4 mb-4 shadow">
      <Text className="text-lg font-semibold">{title}</Text>

      <View className="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
        <View
          className="h-full bg-green-500"
          style={{ width: `${percent}%` }}
        />
      </View>

      <Text className="text-right text-gray-500 mt-2">
        {progress}/{total}
      </Text>
    </TouchableOpacity>
  );
};
