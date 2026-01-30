import { Feather, Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
export function Header() {
    return (
        <View className=" w-full flex flex-row items-center justify-between">
            <Pressable className="w-10 h-10 bg-transparent rounded-full flex justify-center items-center">
                <Ionicons name="menu" size={25} color="#121212" />
            </Pressable>

            <View className="flex-row items-center justify-center gap-1">
                <Text className="text-2xl font-bold">Dashboard</Text>
            </View>

            <Pressable className="w-10 h-10 bg-transparent rounded-full flex justify-center items-center">
                <Feather name="bell" size={25} color="#121212" />
            </Pressable>

        </View>
    );
}