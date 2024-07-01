import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/Screens/HomeScreen";
import LogoutScreen from "./src/Screens/LogoutScreen";
import { Provider } from "./src/Components/Reducer/user";
import LoadingScreen from "./src/Screens/LoadingScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import SignupScreen from "./src/Screens/SignupScreen";
import StartScreen from "./src/Screens/StartScreen";
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs(){
    return(
        <Tab.Navigator initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            if (route.name === 'Home') {
               return <Entypo name="home" size={24} color="black" />
            } else if (route.name === 'Logout') {
               return <Fontisto name="player-settings" size={24} color="black" />
            }
          },
        })}
          >
            <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Tab.Screen name="Logout" component={LogoutScreen} options={{headerShown: false}}/>
        </Tab.Navigator>
    )
}


const App = () => {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Load">
         <Stack.Screen name="Load" component={LoadingScreen} />
         <Stack.Screen name="Start" component={StartScreen}/>
         <Stack.Screen name="Login" component={LoginScreen} />
         <Stack.Screen name="Signup" component={SignupScreen} />
         <Stack.Screen name="Bottom Tabs" component={BottomTabs} options={{headerShown: false}}/>
       </Stack.Navigator>
     </NavigationContainer>
   );
}

export default() => {
  return(
    <Provider>
      <App/>
    </Provider>
  )
}

//To retrieve SHA1 key, use the terminal command:
//keytool -list -v -keystore "C:\Users\%USERNAME%\.android\debug.keystore" -alias androiddebugkey -storepass android -keypass android

