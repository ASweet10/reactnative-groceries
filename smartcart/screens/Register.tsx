import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { supabase } from "../supabaseClient";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type RegisterProps = NativeStackScreenProps<RootStackParamList, "Register">

export default function Register({ navigation }: RegisterProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else alert("Check your email for confirmation.");
  };

  return (
    <View className="flex-1 bg-white px-6 justify-center">
      <Text className="text-3xl font-bold mb-8">Create Account</Text>

      <TextInput
        className="border p-3 rounded mb-4"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        className="border p-3 rounded mb-4"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        className="bg-green-600 p-4 rounded"
        onPress={signUp}
      >
        <Text className="text-white text-center font-semibold">Register</Text>
      </TouchableOpacity>

      <TouchableOpacity className="mt-4" onPress={() => navigation.goBack()}>
        <Text className="text-blue-500 text-center">Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}
