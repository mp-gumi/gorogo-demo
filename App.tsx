import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Top } from "./src/pages/Top";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ゴロゴブックス" component={Top} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
