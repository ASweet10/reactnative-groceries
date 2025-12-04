import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { supabase } from "../supabaseClient";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type LoginProps = NativeStackScreenProps<RootStackParamList, "Login">;

export default function Login({ navigation }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
  };

  return (
    <View className="flex-1 bg-white px-6 justify-center">
      <Text className="text-3xl font-bold mb-8">Login</Text>

      <TextInput
        className="border p-3 rounded mb-4"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        className="border p-3 rounded mb-4"
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      <TouchableOpacity
        className="bg-green-600 p-4 rounded"
        onPress={login}
      >
        <Text className="text-white text-center font-semibold">Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="mt-4"
        onPress={() => navigation.navigate("Register")}
      >
        <Text className="text-blue-500 text-center">
          No account? Create one →
        </Text>
      </TouchableOpacity>
    </View>
  );
}
