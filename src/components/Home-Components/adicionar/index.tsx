import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";

export function BtnAdicionar() {
    const navigation = useNavigation<any>();

    return (
        <View className="py-5 mt-3 ">
            <Pressable
                className="flex shadow justify-center items-center bg-blue-500 p-5 rounded-xl"
                onPress={() => navigation.navigate("Novo Orçamento")}
            >
                <Text className="text-lg  font-bold text-white">
                    + Novo Orçamento
                </Text>
            </Pressable>
        </View>
    );
}
