import { Text, TextInput, TouchableOpacity, View } from "react-native"

export function Formulario() {
    return (
        <View className="w-full">

            <View className="gap-3 px-5">
                <View className="flex-row gap-3">

                    <View className="flex-1  gap-2">
                        <Text className="text-gray-700 font-bold">Razão Social</Text>
                        <TextInput
                            className="border shadow border-gray-300 rounded-xl p-3"
                        />
                    </View>
                </View>
                <View className="flex-row gap-3">

                    <View className="flex-1 gap-2">
                        <Text className="text-gray-700 font-bold">CNPJ / CPF</Text>
                        <TextInput
                            className="border shadow border-gray-300 rounded-xl p-3"
                        />
                    </View>


                    <View className="w-1/3  gap-2">
                        <Text className="text-gray-700 font-bold">CEP</Text>
                        <TextInput
                            className="border shadow border-gray-300 rounded-xl p-3"
                        />
                    </View>
                </View>

                <View className="flex-row gap-3">
                    <View className="flex-1  gap-2">
                        <Text className="text-gray-700 font-bold">Rua</Text>
                        <TextInput
                            className="border shadow border-gray-300 rounded-xl p-3"
                        />
                    </View>

                    <View className="w-1/4  gap-2">
                        <Text className="text-gray-700 font-bold">Número</Text>
                        <TextInput
                            className="border shadow border-gray-300 rounded-xl p-3"
                        />
                    </View>
                </View>

                <View className="flex-row gap-3">
                    <View className="flex-1  gap-2">
                        <Text className="text-gray-700 font-bold">Bairro</Text>
                        <TextInput
                            className="border shadow border-gray-300 rounded-xl p-3"
                        />
                    </View>

                    <View className="w-1/2  gap-2">
                        <Text className="text-gray-700 font-bold">Cidade</Text>
                        <TextInput
                            className="border shadow border-gray-300 rounded-xl p-3"
                        />
                    </View>

                </View>
                <View className="flex-row gap-3">
                    <View className="flex-1 gap-2">
                        <Text className="text-gray-700 font-bold">E-mail</Text>
                        <TextInput
                            className="border shadow border-gray-300 rounded-xl p-3"
                        />
                    </View>

                    <View className="w-1/2 gap-2">
                        <Text className="text-gray-700 font-bold">Telefone</Text>
                        <TextInput
                            className="border shadow border-gray-300 rounded-xl p-3"
                        />
                    </View>
                </View>
                <View className="w-full flex-row gap-4 p-5 mb-10">
                    <TouchableOpacity activeOpacity={0.8} className="flex-1 h-12 bg-blue-700 items-center justify-center rounded-xl shadow">
                        <Text className="text-white font-bold">Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} className="flex-1 h-12 bg-blue-700 items-center justify-center rounded-xl shadow">
                        <Text className="text-white font-bold"> Salvar </Text>
                    </TouchableOpacity>
                </View>


            </View>

        </View>

    )
}