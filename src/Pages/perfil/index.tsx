import { Image, Pressable, Text, TextInput, View } from "react-native";
export function Perfil() {
    return (
        <View>
            <View className="flex justify-center items-center py-6">
                <Image
                    source={{ uri: 'https://picsum.photos/200/300' }}
                    style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 10 }}
                />
                <Text className="font-extrabold text-2xl">Rafael Thomaz</Text>
                <Text className="font-light text-gray-500">Desenvolvedor Front End</Text>
            </View>

            <View className="w-full">

                <View className="gap-3 px-5">
                    <View className="flex-row gap-3">

                        <View className="flex-1">
                            <Text className="text-gray-700 font-bold">Razãp Social</Text>
                            <TextInput
                                className="border border-gray-300 rounded-xl p-3"
                            />
                        </View>
                    </View>
                    <View className="flex-row gap-3">

                        <View className="flex-1">
                            <Text className="text-gray-700 font-bold">CNPJ / CPF</Text>
                            <TextInput
                                className="border border-gray-300 rounded-xl p-3"
                            />
                        </View>


                        <View className="w-1/3">
                            <Text className="text-gray-700 font-bold">CEP</Text>
                            <TextInput
                                className="border border-gray-300 rounded-xl p-3"
                            />
                        </View>
                    </View>

                    <View className="flex-row gap-3">
                        <View className="flex-1">
                            <Text className="text-gray-700 font-bold">Rua</Text>
                            <TextInput
                                className="border border-gray-300 rounded-xl p-3"
                            />
                        </View>

                        <View className="w-1/4">
                            <Text className="text-gray-700 font-bold">Número</Text>
                            <TextInput
                                className="border border-gray-300 rounded-xl p-3"
                            />
                        </View>
                    </View>

                    <View className="flex-row gap-3">
                        <View className="flex-1">
                            <Text className="text-gray-700 font-bold">Bairro</Text>
                            <TextInput
                                className="border border-gray-300 rounded-xl p-3"
                            />
                        </View>

                        <View className="w-1/2">
                            <Text className="text-gray-700 font-bold">Cidade</Text>
                            <TextInput
                                className="border border-gray-300 rounded-xl p-3"
                            />
                        </View>

                    </View>
                    <View className="flex-row gap-3">
                        <View className="flex-1">
                            <Text className="text-gray-700 font-bold">E-mail</Text>
                            <TextInput
                                className="border border-gray-300 rounded-xl p-3"
                            />
                        </View>

                        <View className="w-1/2">
                            <Text className="text-gray-700 font-bold">Telefone</Text>
                            <TextInput
                                className="border border-gray-300 rounded-xl p-3"
                            />
                        </View>
                    </View>
                    <View className="w-full flex-row justify-between gap-5 p-5">
                        <Pressable className="flex-1 h-10 bg-blue-700 items-center justify-center rounded-xl">
                            <Text className="text-white font-bold">Editar</Text>
                        </Pressable>

                        <Pressable className="flex-1 h-10 bg-blue-700 items-center justify-center rounded-xl">
                            <Text className="text-white font-bold">Salvar</Text>
                        </Pressable>
                    </View>

                </View>

            </View>

        </View>
    )
}