import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { Header } from "../components/Home-Components/header";
import Home from "../Pages/Home";
import { NewOrc } from "../Pages/NewOrc";
import { PdfOrcamento } from "../Pages/PdfOrcamento";
import { Pedidos } from "../Pages/Pedidos";
import { Perfil } from "../Pages/Perfil";
const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({ header: () => <Header title={route.name} />, tabBarActiveTintColor: "#136dec", tabBarInactiveTintColor: "#9ca3af", })}>
      <Tab.Screen name="Início" component={Home} options={{
        tabBarIcon: ({ color }) => {
          return <Ionicons name="home" size={32} color={color} />
        }
      }} />

      <Tab.Screen name="Pedidos" component={Pedidos} options={{
        tabBarIcon: ({ color }) => {
          return <Ionicons name="document-text" size={24} color={color} />
        }
      }} />

      <Tab.Screen name="Novo Orçamento" component={NewOrc} options={{
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => (
          <View className="relative -top-5 w-20 h-20 bg-blue-600 rounded-full items-center justify-center shadow-lg">
            <Ionicons name="add" size={35} color="#fff" />
          </View>
        ),
      }} />

      <Tab.Screen name="Orçamentos" component={PdfOrcamento} options={{
        tabBarIcon: ({ color }) => {
          return <Ionicons name="receipt" size={24} color={color} />
        }
      }} />

      <Tab.Screen name="Perfil" component={Perfil} options={{
        tabBarIcon: ({ color }) => {
          return <Ionicons name="person" size={24} color={color} />
        }
      }} />


    </Tab.Navigator>
  );
}
