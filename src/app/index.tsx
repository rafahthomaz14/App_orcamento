import Constants from 'expo-constants';
import { ScrollView, View } from "react-native";
import { BtnAdicionar } from '../components/adicionar';
import { BarraNav } from '../components/barraNav';
import { CardNotificacao } from '../components/cardNotificacao';
import { CardOrcamento } from '../components/cardOrcamento';
import { Header } from '../components/header';
import { Notificacao } from '../components/notificacao';
import { Orcamento } from '../components/orcamento';

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (

    <View>
      <ScrollView className='bg-gray-100'>

        {/* adicionando tela inteira com um padding nas laterais de 5  */}
        <View className="w-full px-5" style={{ marginTop: statusBarHeight + 8 }}>
          <Header />
          <BtnAdicionar />
          <Orcamento />
          <CardOrcamento />
          <Notificacao />
          <CardNotificacao />
        </View>

      </ScrollView>

      <BarraNav />

    </View>


  );
}
