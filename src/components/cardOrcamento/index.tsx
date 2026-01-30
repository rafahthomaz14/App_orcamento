import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

export function CardOrcamento() {
    return (

        <View className="flex flex-col gap-4">

            <Pressable className="bg-white rounded-xl px-5 py-3 ">
                <View className="flex flex-row justify-between py-2 ">
                    <View>
                        <Text className="font-bold text-xl">Loja Integrada S.A</Text>
                        <Text className="font-light text-sm">Design de Interface E-commerce</Text>
                    </View>
                    <View className="flex items-center">
                        <Text className="bg-blue-500 px-7 rounded-full items-center text-white font-bold p-2 ">Aceito</Text>
                    </View>
                </View>
                <View className="flex flex-row justify-between items-center">
                    <View className="flex flex-row justify-center items-center">
                        <Ionicons name="calendar-outline" size={15} color="#9ca3af" />
                        <Text className="font-light text-gray-400 ml-2 ">29 Jan 2026</Text>
                    </View>
                    <Text className="text-blue-600 font-extrabold text-2xl">R$ 4.500,00</Text>
                </View>
            </Pressable>



            <Pressable className="bg-white rounded-xl px-5 py-3">
                <View className="flex flex-row justify-between py-2 ">
                    <View>
                        <Text className="font-bold text-xl">Loja Integrada S.A</Text>
                        <Text className="font-light text-sm">Design de Interface E-commerce</Text>
                    </View>
                    <View className="flex items-center">
                        <Text className="bg-gray-500 px-7 rounded-full items-center text-white font-bold p-2 ">Em Análise</Text>
                    </View>
                </View>
                <View className="flex flex-row justify-between items-center">
                    <View className="flex flex-row justify-center items-center">
                        <Ionicons name="calendar-outline" size={15} color="#9ca3af" />
                        <Text className="font-light text-gray-400 ml-2 ">29 Jan 2026</Text>
                    </View>
                    <Text className="text-gray-600 font-extrabold text-2xl">R$ 4.500,00</Text>
                </View>
            </Pressable>


            <Pressable className="bg-white rounded-xl px-5 py-3">
                <View className="flex flex-row justify-between py-2 ">
                    <View>
                        <Text className="font-bold text-xl">Loja Integrada S.A</Text>
                        <Text className="font-light text-sm">Design de Interface E-commerce</Text>
                    </View>
                    <View className="flex items-center">
                        <Text className="bg-red-500 px-7 rounded-full items-center text-white font-bold p-2 ">Recusado</Text>
                    </View>
                </View>
                <View className="flex flex-row justify-between items-center">
                    <View className="flex flex-row justify-center items-center">
                        <Ionicons name="calendar-outline" size={15} color="#9ca3af" />
                        <Text className="font-light text-gray-400 ml-2 ">29 Jan 2026</Text>
                    </View>
                    <Text style={{ textDecorationLine: "line-through", textDecorationColor: "#6B7280", textDecorationStyle: "solid", }} className="text-gray-500 font-extrabold text-2xl"> R$ 4.500,00 </Text>            </View>
            </Pressable>
        </View>

    )
}