import { Text, View } from "react-native";

export function Orcamento(){
    return(
        <View className="flex flex-row justify-between items-center mb-6 ">
            <Text className="text-xl font-bold ">Orçamentos Recentes</Text>
            <Text className="font-bold text-lg text-blue-800">Ver Todos</Text>
        </View>
    )
}