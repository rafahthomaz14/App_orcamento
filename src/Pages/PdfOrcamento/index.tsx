import { Ionicons } from "@expo/vector-icons"
import { Pressable, ScrollView, Text, TextInput, View } from "react-native"
export function PdfOrcamento() {
    return (
        <ScrollView className="w-full px-5 py-7 ">
            <View className="w-full  gap-5">
                <View className="relative">
                    <Ionicons name="search-outline" size={20} color="#6B7280" className="absolute left-4 top-3" />
                    <TextInput className="border border-gray-500 rounded-xl h-12 pl-12 pr-4" placeholder="Buscar orçamento" placeholderTextColor="#9CA3AF" />
                </View>
                <Text className="font-bold text-2xl"> Meus Orçamentos</Text>
            </View>
            <View className="w-full flex mt-5 gap-3">
                <View className="flex flex-row justify-between items-center gap-5 bg-gray-50 p-3 rounded-xl">
                    <Pressable className="flex flex-row items-center gap-4">
                        <Text className="font-bold text-lg">001</Text>
                        <Text className="font-normal text-lg">Loja Integrada S.A</Text>
                    </Pressable>
                    <View>
                        <Pressable className="flex-row items-center justify-center bg-blue-600 px-4 h-11 rounded-xl">
                            <Ionicons name="download-outline" size={20} color="#fff" />
                            <Text className="text-white font-bold ml-2">PDF</Text>
                        </Pressable>
                    </View>

                </View>

                <View className="flex flex-row justify-between items-center gap-5 bg-gray-50 p-3 rounded-xl">
                    <Pressable className="flex flex-row items-center gap-4">
                        <Text className="font-bold text-lg">002</Text>
                        <Text className="font-normal text-lg">Loja Integrada S.A</Text>
                    </Pressable>
                    <View>
                        <Pressable className="flex-row items-center justify-center bg-blue-600 px-4 h-11 rounded-xl">
                            <Ionicons name="download-outline" size={20} color="#fff" />
                            <Text className="text-white font-bold ml-2">PDF</Text>
                        </Pressable>
                    </View>

                </View>


                 <View className="flex flex-row justify-between items-center gap-5 bg-gray-50 p-3 rounded-xl">
                    <Pressable className="flex flex-row items-center gap-4">
                        <Text className="font-bold text-lg">003</Text>
                        <Text className="font-normal text-lg">Loja Integrada S.A</Text>
                    </Pressable>
                    <View>
                        <Pressable className="flex-row items-center justify-center bg-blue-600 px-4 h-11 rounded-xl">
                            <Ionicons name="download-outline" size={20} color="#fff" />
                            <Text className="text-white font-bold ml-2">PDF</Text>
                        </Pressable>
                    </View>

                </View>
            </View>
        </ScrollView>

    )
}