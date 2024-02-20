import {View,StyleSheet,TextInput,Text} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import Mybutton from './Components/Mybutton';
import { Fontisto } from '@expo/vector-icons';

export default function LoginScreen({navigation}){
  const [loginelevation, setloginelevation] = useState(true);
  const [signupelevation, setsignupelevation] = useState(true);
  const [emailtxt, setemailtxt] = useState("")

  return(
        <View style={style.screen}>

            <View style={style.upperblock}>
              <View style={{height: 90,width: 90,borderRadius: 50,borderColor: "white",alignItems: "center", justifyContent: "center",backgroundColor: "white",}}>
                <Fontisto name="locked" size={44} color="black" />
              </View>
            </View>

            <View style={style.textfield}>
              <Ionicons name='mail' size={22} style={style.iconstyling}></Ionicons>
              <TextInput cursorColor={"black"} placeholder='xyz123@gmail.com' keyboardType='email-address' value={emailtxt} onChangeText={(txt)=> setemailtxt(txt)}>
              </TextInput>
            </View>

            <View style={style.textfield}>
              <MaterialIcons name='vpn-key' size={22} style={style.iconstyling}></MaterialIcons>
              <TextInput cursorColor={"black"} placeholder='9s73fb4@%sdbf^7' secureTextEntry={true}>
              </TextInput>
            </View>

           <Mybutton buttontxt={"Login"} style={style.buttonstyling} onpress={()=> navigation.navigate("home")} onpressin={()=> setloginelevation(false)} onpressout={()=> setloginelevation(true)} liveelevation={loginelevation}/>

           <View style={{flexDirection: "row",justifyContent: "center", alignItems: "center",marginHorizontal: 20,marginTop: 15}}>
             <View style={{width: "45%",backgroundColor: "#eeeeee",height: 2}}></View>
             <Text style={{paddingHorizontal: 8,color: "#bcbcbc"}}>or</Text>
             <View style={{width: "45%",backgroundColor: "#eeeeee",height: 2}}></View>
           </View>

           <Mybutton buttontxt={"Signup"} style={style.buttonstyling} onpress={()=> navigation.navigate("home")}  onpressin={()=> setsignupelevation(false)} onpressout={()=> setsignupelevation(true)} liveelevation={signupelevation}/>
       </View>
  );
}

const style = StyleSheet.create(
  {
    upperblock: {
      height: "30%",
      backgroundColor: "#ffd966",
      borderBottomLeftRadius: 35,
      borderBottomRightRadius: 35,
      marginBottom: 30,
      justifyContent: "flex-end",
      paddingBottom: 50,
      alignItems: "center"
    },

    screen: {
      backgroundColor: "white",
      flex: 1,
    },

    textfield: {
      paddingHorizontal: 15,
      flexDirection: "row",
      alignSelf: "center",
      margin: 12,
      alignItems: "center",
      justifyContent: "flex-start",
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor: "#eeeeee",
      borderRadius: 14,
      width: "90%",
      height: 60,
    },

    iconstyling: {
      marginRight: 12
    },

    buttonstyling: {
      marginRight: "auto",
      marginLeft: "auto",
      backgroundColor: "#ffd966",
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: "center",
      height: 60,
      width: "90%",
      marginTop: 15,
      shadowOffset: (1,-1),
      shadowColor: "black",
      shadowRadius: 6,
      shadowOpacity: 1,
    }
  }
)