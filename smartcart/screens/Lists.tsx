import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, FlatList } from "react-native";
import { supabase } from "../supabaseClient";

export default function Lists() {
  const [lists, setLists] = useState<any[]>([]);
  const [newListName, setNewListName] = useState("");

  const loadLists = async () => {
    const { data, error } = await supabase
      .from("lists")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) console.log(error);
    else setLists(data);
  };

  const createList = async () => {
    if (!newListName.trim()) return;

    const { error } = await supabase.from("lists").insert({
      name: newListName
    });

    if (!error) {
      setNewListName("");
      loadLists();
    }
  };

  useEffect(() => {
    loadLists();
  }, []);

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4">Your Lists</Text>

      <FlatList
        data={lists}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity className="p-4 bg-gray-100 rounded mb-3">
            <Text className="text-lg">{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <View className="flex-row mt-4">
        <TextInput
          className="flex-1 border p-3 rounded"
          placeholder="New list name"
          value={newListName}
          onChangeText={setNewListName}
        />

        <TouchableOpacity
          className="bg-green-600 px-4 justify-center ml-2 rounded"
          onPress={createList}
        >
          <Text className="text-white">Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
