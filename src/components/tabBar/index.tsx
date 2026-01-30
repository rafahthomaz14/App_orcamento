import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Tabs() {
    const [activeTab, setActiveTab] = useState("Orçamentos");

    const tabs = ["Orçamentos", "Em Análise", "Recusados"];

    return (
        <View className="flex-row border-b border-gray-200 mb-4">
            {tabs.map((tab) => {
                const isActive = activeTab === tab;

                return (
                    <Pressable key={tab} onPress={() => setActiveTab(tab)} className="mr-6">
                        <View className="items-center">
                            <Text className={`text-base ${isActive ? "text-blue-600 font-semibold" : "text-gray-500"}`} > {tab} </Text>
                            {isActive && (<View className="mt-2 h-0.5 w-full bg-blue-600 rounded-full" />)}
                        </View>
                    </Pressable>
                );
            })}
        </View>
    );
}
