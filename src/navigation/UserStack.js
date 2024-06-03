import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserScreen from "./BottomNavigationPage/UserScreen";
import AboutUs from "../components/Pages/AboutUs";
import Account from "../components/Pages/Account";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";
import UserInfoCard from "../components/Cards/UserInfoCard";

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
      <Stack.Screen options={{ headerTitle: 'Booking' }} name="UserScreen" component={UserScreen} />
      <Stack.Screen options={{ headerTitle: '' }}  name="AboutUs" component={AboutUs} />
      <Stack.Screen options={{ headerTitle: '' }}  name="UserInfoCard" component={UserInfoCard} />
      <Stack.Screen options={{ headerTitle: '' }}  name="Login" component={Login} />
      <Stack.Screen options={{ headerTitle: '' }}  name="Register" component={Register} />
      <Stack.Screen options={{ headerTitle: '' }} name="Account" component={Account} />
      {/* <Stack.Screen options={{ headerTitle: '' }} name="Account" component={Account} /> */}
    </Stack.Navigator>
  );
}
