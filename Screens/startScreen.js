import {View,StyleSheet,Text, ActivityIndicator} from 'react-native';
import { useState } from 'react';
import Mybutton from './Components/Mybutton';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

export default function StartScreen({navigation}){

  const [iselevation, setiselevation] = useState(true);
  let [loadfont,error] = useFonts({
    "inter-black" : require("../assets/fonts/Inter-Black.ttf")
  })

  if(!loadfont)
  {
    return <ActivityIndicator></ActivityIndicator>
  }

  return(
     <View style={style.screen}>
          
         <View style={{paddingHorizontal: 20,justifyContent: "center",flex: 1,alignItems: "center"}}>
            <View style={{alignItems: "center"}}>
              <Ionicons name="newspaper-outline" size={84} color="white" />
              <Text style={{fontSize: 26, color: "white", fontWeight: "600",fontFamily: "inter-black"}}>Happening</Text>
            </View>
         </View>


         <Mybutton buttontxt={"Get Started"} style={style.buttonstyling} onpress={()=> navigation.navigate("login")} onpressin={()=> setiselevation(false)} onpressout={()=> setiselevation(true)} liveelevation={iselevation}/>

    </View>
     
  );
}

const style = StyleSheet.create(
  {
    screen: {
      backgroundColor: "#ffd966",
      flex: 1,
      justifyContent :"space-between"
    },

    image: {
      height: 220,
      width: 220,
      alignSelf: "center",
      justifyContent :"center"
    },

    buttonstyling: {
      marginRight: "auto",
      marginBottom: 40,
      marginLeft: "auto",
      backgroundColor: "white",
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: "center",
      height: 60,
      width: "90%",
      shadowOffset: (1,-1),
      shadowColor: "black",
      shadowRadius: 6,
      shadowOpacity: 1,
    }
  }
)