import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AdminScreen } from "./screens/AdminScreen";
import { IntroduceScreen } from "./screens/IntroduceScreen";
import { ListProductScreen } from "./screens/ListProductScreen";
import { ProductDetail } from "./screens/ProductDetail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="IntroduceScreen" component={IntroduceScreen} />
        <Stack.Screen name="ListProductScreen" component={ListProductScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="AdminScreen" component={AdminScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

