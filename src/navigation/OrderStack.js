import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrderScreen from "./BottomNavigationPage/OrderScreen";
import OrderDetail from "../components/Pages/OrderDetail";

export default function UserStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#812F33",
      },
      headerTitleStyle:{
          fontSize:25,
          fontWeight:'bold',
          color:'black',
      },
      headerBackTitle:'GoBack',
      headerTintColor:'white',
      headerTruncatedBackTitle: 'Back',
    }}
    >
      <Stack.Screen options={{ headerTitle: 'Booking' }} name="OrderScreen" component={OrderScreen} />
      <Stack.Screen options={{ headerTitle: '' }} name="OrderDetail" component={OrderDetail} />

    </Stack.Navigator>
  );
}
