import { Ionicons } from "@expo/vector-icons"
import { ScrollView, Text, TextInput, View } from "react-native"
export function Pedidos() {
    return (
        <ScrollView className="w-full px-5 py-7 ">
            <View className="w-full  gap-5">
                <View className="relative">
                    <Ionicons name="search-outline" size={20} color="#6B7280" className="absolute left-4 top-3" />
                    <TextInput className="border border-gray-400 rounded-xl h-12 pl-12 pr-4" placeholder="Buscar Pedidos" placeholderTextColor="#9CA3AF" />
                </View>
                <Text className="font-bold text-2xl"> Meus Pedidos</Text>
            </View>
            <View className="flex justify-center items-center p-5">
                <Text className="font-semibold text-gray-400">Pedidos nao foi encontrado !</Text>
            </View>
        </ScrollView>

    )
}