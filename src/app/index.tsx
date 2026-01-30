import Constants from 'expo-constants';
import { ScrollView, View } from "react-native";
import { BarraNav } from '../components/Home-Components/barraNav';
import Home from '../Pages/Home';
const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (

    <View className='flex-1'>
      <ScrollView className='bg-gray-100' >
        <View className="w-full px-5" style={{ marginTop: statusBarHeight + 8 }}>
          <Home/>
        </View>
      </ScrollView>
      <BarraNav />
    </View>


  );
}
