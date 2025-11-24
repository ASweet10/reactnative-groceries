import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { ListDetailScreen } from "../screens/ListDetailScreen";

type StackParamList = {
  Home: undefined;
  ListDetail: { listId: string; title: string };
};

const Stack = createNativeStackNavigator<StackParamList>();

export const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="ListDetail" component={ListDetailScreen} />
  </Stack.Navigator>
);