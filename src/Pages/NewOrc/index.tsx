import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

const STATUS_OPTIONS = [
    {
        label: "Aceito",
        value: "Aceito",
        activeClass: "bg-blue-600 border-blue-600",
    },
    {
        label: "Em análise",
        value: "Em análise",
        activeClass: "bg-gray-500 border-gray-500",
    },
    {
        label: "Recusado",
        value: "Recusado",
        activeClass: "bg-red-600 border-red-600",
    },
];



export function NewOrc() {
    const [pagamento, setPagamento] = useState("avista");
    const [status, setStatus] = useState("Aceito");

    return (
        <ScrollView className="flex-1 p-5 ">
            <View className="flex flex-row gap-3">
                <View className="w-1/6 gap-2">
                    <Text className="font-semibold">N°</Text>
                    <TextInput className="border border-gray-400 shadow h-10 rounded-xl w-full" />
                </View>

                <View className="w-4/5 gap-2">
                    <Text className="font-semibold">Cliente</Text>
                    <TextInput textAlignVertical="auto" placeholder="Ex: MRE Solution " className="shadow p-4 border border-gray-400 h-10 rounded-xl w-full" />
                </View>
            </View>

            <View className="flex-1 mt-3">
                <View className=" gap-2">
                    <Text className="font-semibold">Titulo do Projeto</Text>
                    <TextInput textAlignVertical="auto" placeholder="Ex: Landing Page Personalizada" className=" shadow p-4 border border-gray-400 h-10 rounded-xl w-full" />
                </View>
            </View>

            <View className="flex flex-row gap-3 mt-3">
                <View className="w-1/3 gap-2">
                    <Text className="font-semibold">Prazo de Entrega</Text>
                    <TextInput textAlignVertical="auto" placeholder="15 Dias úteis" className="p-4 border border-gray-400 shadow h-10 rounded-xl w-full" />
                </View>
                <View className="w-2/3 gap-2">
                    <Text className="font-semibold">Status</Text>

                    <View className="flex-row gap-2">
                        {STATUS_OPTIONS.map((option) => {
                            const ativo = status === option.value;

                            return (
                                <TouchableOpacity key={option.value} onPress={() => setStatus(option.value)} activeOpacity={0.85} className={`flex-1 h-10 rounded-xl border items-center justify-center ${ativo ? option.activeClass : "bg-white border-gray-400"}`}>
                                    <Text className={`text-xs font-bold ${ativo ? "text-white" : "text-gray-700"}`}>
                                        {option.label}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>

                </View>

            </View>

            <View className="mt-3">
                <View className=" gap-2">
                    <Text className="font-semibold">Decrição do Serviço</Text>
                    <TextInput
                        multiline
                        numberOfLines={4}
                        textAlignVertical="top"
                        placeholder="Descreva todos os detalhes ..."
                        className="border border-gray-400 rounded-xl w-full h-32 p-4 shadow"
                    />
                </View>

                <View className="flex-1 mt-3">
                    <View className=" gap-2">
                        <Text className="font-semibold">Valor do Orçamento </Text>
                        <TextInput textAlignVertical="auto" placeholder="R$ 00,00" className=" shadow p-4 border border-gray-400 h-15 rounded-xl w-full" />
                    </View>
                </View>
                <View className="flex-1 mt-3">
                    <View className=" gap-2">
                        <Text className="font-semibold">Prazo de Pagamento </Text>
                        <View className="flex-row gap-2">
                            {["À vista", "Cartão"].map((item) => (
                                <TouchableOpacity key={item} onPress={() => setPagamento(item)} className={`shadow flex-1 h-12 rounded-xl border justify-center items-center ${pagamento === item ? "bg-blue-600 border-blue-600" : "border-gray-400 bg-white"}`}>
                                    <Text className={`${pagamento === item ? "text-white font-bold" : "text-gray-700"}`}>{item}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>
                <TouchableOpacity className="mt-6 h-14 bg-blue-600 rounded-xl items-center justify-center shadow">
                    <View className="flex flex-row gap-2">
                        <Ionicons name="document-text" size={24} color="#ffff" />
                        <Text className="text-white font-bold text-lg"> Gerar Orçamento </Text>
                    </View>
                </TouchableOpacity>

            </View>
        </ScrollView>

    )
}