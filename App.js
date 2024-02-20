import { NavigationContainer } from "@react-navigation/native" ;
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "./Screens/startScreen";
import LoginScreen from "./Screens/loginScreen";
import HomeScreen from "./Screens/HomeScreen";

const Stack = createNativeStackNavigator();
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} options={{headerShown: false, }}/>
        <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false, animation: "slide_from_right"}}/>
        <Stack.Screen name="home" component={HomeScreen} options={{headerShown: false, animation: "slide_from_right"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}