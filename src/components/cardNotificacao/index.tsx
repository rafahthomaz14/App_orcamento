import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

export function CardNotificacao() {
    return (

        <Pressable className="bg-white rounded-xl px-5 gap-1 flex flex-row items-center justify-start">
            <View className="p-3 bg-blue-500 rounded-full">
                <Ionicons name="notifications" size={30} color="#FFFF" />
            </View>

            <View className="flex flex-col justify-between p-3 ">
                <Text className="font-bold text-xl">Orçamento aceito pelo cliente</Text>
                <Text className="font-light text-sm  ">Loja Integrada S.A aprovou seu orçamento</Text>
                <Text className="font-light text-gray-400 py-2 ">AGORA MESMO</Text>
            </View>
        </Pressable>
    )
}