import { Pressable, Text, View } from "react-native";

export function BtnAdicionar() {
    return (
        <View className="py-5">
            <Pressable className="flex justify-center items-center  bg-blue-500 p-5 rounded-xl">
                <Text className="text-lg font-bold text-white"> + Novo Orçamento</Text>
            </Pressable>
        </View>
    )
}