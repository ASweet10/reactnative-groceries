//import { AuthProvider } from "./authentication/AuthProvider"
import { NavigationContainer } from "@react-navigation/native"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { SafeAreaProvider } from "react-native-safe-area-context"
//import { useAuth } from "./authentication/AuthProvider"
import { RootStackParamList } from "types/navigation"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AuthStack from "navigation/AuthStack"
import Tabs from "navigation/Tabs"

const queryClient = new QueryClient()

const stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  //const { session, loading } = useAuth()
  //if (loading) return null

  return (
    //<AuthProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <SafeAreaProvider>
            {/* { session ? <Tabs /> : <AuthStack /> } */}
            { <Tabs /> }
          </SafeAreaProvider>
        </NavigationContainer>
      </QueryClientProvider>
    //</AuthProvider>
  )
}