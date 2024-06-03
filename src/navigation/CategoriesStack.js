import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Rooms from '../components/Pages/Rooms';
import ThemeHotels from '../components/Pages/ThemeHotels';
import CategoriesScreen from './BottomNavigationPage/CategoriesScreen';

export default function CategoriesStack (){
    const Stack = createNativeStackNavigator();
    return(
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
            <Stack.Screen options={{ headerTitle: 'Booking' }} name="CategoriesScreen" component={CategoriesScreen}/>
            <Stack.Screen options={{ headerTitle: '' }}  name="Rooms" component={Rooms}/>
            <Stack.Screen options={{ headerTitle: '' }}  name='ThemeHotels' component={ThemeHotels} />

        </Stack.Navigator>
    
    );
}