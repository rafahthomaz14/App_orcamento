import Constants from 'expo-constants';
import { ScrollView, View } from "react-native";
import { BtnAdicionar } from '../components/adicionar';
import { BarraNav } from '../components/barraNav';
import { CardNotificacao } from '../components/cardNotificacao';
import { CardOrcamento } from '../components/cardOrcamento';
import { Header } from '../components/header';
import { Notificacao } from '../components/notificacao';
import { Orcamento } from '../components/orcamento';
import Tabs from '../components/tabBar';
// import { Perfil } from '../Pages/perfil';

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (

    <View className='flex-1'>
      <ScrollView className='bg-gray-100' >
        <View className="w-full px-5" style={{ marginTop: statusBarHeight + 8 }}>
          <Header />
          <BtnAdicionar />
          <Tabs />
          <Orcamento />
          <CardOrcamento />
          <Notificacao />
          <CardNotificacao />

          {/* <Perfil/> */}

        </View>
      </ScrollView>
      <BarraNav />
    </View>


  );
}
