import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";
export function Perfil() {
    return (
        <View>
            <View className="flex justify-center items-center py-10">
                <Image
                    source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
                    style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 10 }}
                />
                <Text className="font-extrabold text-2xl">Rafael Thomaz</Text>
                <Text className="font-light text-gray-500">Desenvolvedor Front End</Text>
            </View>

            <View className="gap-3">
                <Pressable className="bg-gray-50 w-full p-4 rounded-xl flex flex-row justify-between items-center">
                    <View className="flex flex-row justify-start items-center gap-3">
                        <Ionicons name="person" size={30} color="#2563eb" />
                        <Text>Dados Pessoais</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                </Pressable>

                <Pressable className="bg-gray-50 w-full p-4 rounded-xl flex flex-row justify-between items-center">
                    <View className="flex flex-row justify-start items-center gap-3">
                        <Ionicons name="help-circle" size={30} color="#2563eb" />
                        <Text>Ajuda</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                </Pressable>

                <Pressable className="bg-gray-50 w-full p-4 rounded-xl flex flex-row justify-between items-center">
                    <View className="flex flex-row justify-start items-center gap-3">
                        <Ionicons name="help-circle" size={30} color="#2563eb" />
                        <Text>Ajuda</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                </Pressable>
            </View>


            <View className="mt-20">
                <Pressable className="bg-red-100 w-full p-4 rounded-xl flex flex-row justify-center items-center">
                    <View className="flex flex-row items-center gap-3">
                        <Ionicons name="exit" size={30} color="#dc2626" />
                        <Text className="font-bold text-red-600">Sair da Conta</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}