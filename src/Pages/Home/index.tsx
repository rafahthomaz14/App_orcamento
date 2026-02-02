import { BtnAdicionar } from "@/src/components/Home-Components/adicionar";
import { CardNotificacao } from "@/src/components/Home-Components/cardNotificacao";
import { CardOrcamento } from "@/src/components/Home-Components/cardOrcamento";
import { Notificacao } from "@/src/components/Home-Components/notificacao";
import { Orcamento } from "@/src/components/Home-Components/orcamento";
import Tabs from "@/src/components/Home-Components/tabBar";
import { ScrollView, View } from "react-native";


export default function Home() {
    return (
            <ScrollView  className='bg-gray-100'>
                <View className="w-full px-5">
                    <BtnAdicionar />
                    <Tabs />
                    <Orcamento />
                    <CardOrcamento />
                    <Notificacao />
                    <CardNotificacao />
                </View>
            </ScrollView>
    );
}
