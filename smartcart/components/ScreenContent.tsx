import { Text, View } from 'react-native'

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <View className='flex w-full h-full bg-gray-300'>
      <View className='flex h-full justify-center items-center'>
        <Text className="text-center items-center justify-center text-blue-700 text-5xl font-bold">SmartCart</Text>
      </View>
    </View>
  );
};
