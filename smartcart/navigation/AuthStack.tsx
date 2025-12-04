import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../screens/Login"
import Register from "../screens/Register"
import { RootStackParamList } from "types/navigation"

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  )
}
