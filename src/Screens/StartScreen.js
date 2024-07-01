import {View,StyleSheet,Text, ActivityIndicator} from 'react-native';
import { useState ,useEffect} from 'react';
import Mybutton from '../Components/Mybutton';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

export default function StartScreen({navigation}){

    useEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    })

  const [iselevation, setiselevation] = useState(true);
  let [loadfont,error] = useFonts({
    "Gantari": require('../../assets/fonts/Gantari-VariableFont_wght.ttf'),
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
              <Text style={{fontSize: 26, color: "white", fontWeight: "600",fontFamily: "Gantari"}}>Happening</Text>
            </View>
         </View>


         <Mybutton buttontxt={"Get Started"} style={style.buttonstyling} onpress={()=> navigation.navigate("Login")} onpressin={()=> setiselevation(false)} onpressout={()=> setiselevation(true)} liveelevation={iselevation}/>

    </View>
     
  );
}

const style = StyleSheet.create(
  {
    screen: {
      backgroundColor: "#5061ff",
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