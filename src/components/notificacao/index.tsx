import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export function Notificacao(){
    return(
        <View className="flex flex-row justify-between items-center py-5">
            <Text className="font-bold text-xl">Notificações</Text>
            <Ionicons name="settings-outline" size={24} color="black" />
        </View>
    )
}