import { Formulario } from "@/src/components/Perfil-Components/Formulario";
import { Image, ScrollView, Text, View } from "react-native";
export function Perfil() {
    return (
        <ScrollView>
            <View className="flex justify-center items-center py-6">
                <Image
                    source={{ uri: 'https://picsum.photos/200/300' }}
                    style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 10 }}
                />
                <Text className="font-extrabold text-2xl">Rafael Thomaz</Text>
                <Text className="font-light text-gray-500">Desenvolvedor Front End</Text>
            </View>

            <Formulario />

        </ScrollView>
    )
}