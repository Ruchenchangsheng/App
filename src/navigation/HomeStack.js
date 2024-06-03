//HomeStack.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './BottomNavigationPage/HomeScreen';
import Rooms from '../components/Pages/Rooms';
import RoomDetail from '../components/Pages/RoomDetail';
import Book from '../components/Pages/Book';


export default function HomeStack (){
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
            <Stack.Screen options={{ headerTitle: 'Booking' }} name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen options={{ headerTitle: '' }} name="Rooms" component={Rooms}/>
            <Stack.Screen options={{ headerTitle: '' }} name="RoomDetail" component={RoomDetail}/>
            <Stack.Screen options={{ headerTitle: '' }} name="Book"  component={Book}/>
            
        </Stack.Navigator>
    
    );
}