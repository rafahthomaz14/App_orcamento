import { BtnAdicionar } from '@/src/components/adicionar';
import { CardNotificacao } from '@/src/components/cardNotificacao';
import { CardOrcamento } from '@/src/components/cardOrcamento';
import { Header } from '@/src/components/header';
import { Notificacao } from '@/src/components/notificacao';
import { Orcamento } from '@/src/components/orcamento';
import Tabs from '@/src/components/tabBar';
import { ScrollView, View } from "react-native";

export default function Home() {
    return (

        <View>
            <ScrollView>
                <View>
                    <Header />
                    <BtnAdicionar />
                    <Tabs />
                    <Orcamento />
                    <CardOrcamento />
                    <Notificacao />
                    <CardNotificacao />
                </View>
            </ScrollView>
        </View>


    );
}
