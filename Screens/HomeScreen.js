import {View,StyleSheet,Text,FlatList, ActivityIndicator, TextInput, TouchableOpacity, Animated} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useEffect } from 'react';
import Newsbox from './Components/Newsbox';
import {API_KEY} from '@env';

export default function HomeScreen(){

   const [loading, setloading] = useState(true)
   const [data, setdata] = useState(null)
   const [searchtxt, setsearchtxt] = useState("")

   useEffect(() => {
     (async()=> {
       try{
        var response = await fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=${API_KEY}`)
        var jsondata = await response.json();
        setdata(jsondata);
       }
       catch(e){
        console.error("error while fetching")
       }
       finally{
        setloading(false)
       }
     })()
   }, [])


   if(loading)
   {
     return(
        <View style={style.loadingscreen}>
            <ActivityIndicator color={"black"} size={18}></ActivityIndicator>
        </View>
     )
   }

   return(
    <View style={style.screenbackground}>
        {Headercomp(searchtxt,setsearchtxt)}
        <FlatList
        scrollEnabled={true}
        onScrollToIndexFailed={(e)=> console.log(e)}
        data={data.articles}
        keyExtractor={(item,index)=> index.toString()}
        renderItem={({item,index})=> <Newsbox item={item} index={index}/>}
        ItemSeparatorComponent={()=>spacing()}
        />
    </View>
   )
}

const style = StyleSheet.create(
    {
        headerstyling: {
            alignItems: "center",
            flexDirection: "column",
            marginBottom: 10,
        },

        titlestyling: {
            backgroundColor: "white",
            borderRadius: 10,
            width: "90%",
            height: 60,
            marginBottom: 10,
            marginRight: "auto",
            marginLeft: "auto",
            justifyContent: "space-between",
            flexDirection: "row",
            paddingHorizontal: 20,
            elevation: 10,
            shadowOffset: (2,-2),
            shadowColor:"black",
            opacity: 1
        },

        loadingscreen : {
            backgroundColor: "#ffd966",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },

        screenbackground : {
            paddingTop: 50,
            backgroundColor: "#ffd966",
            flex: 1,
        },
    }
)


function spacing() {
    return <View style={{ height: 10 }}></View>;
}

function Headercomp(searchtxt, setsearchtxt) {
 
    const handletextfxn = (txt)=> {
        setsearchtxt(txt)
    }

    return(
            <View style={style.titlestyling}>
             <TextInput 
             placeholder='Search the latest news' 
             maxLength={35} 
             value={searchtxt} 
             onChangeText={handletextfxn}>
            </TextInput>
            
            <Ionicons 
            name="person-circle" 
            size={50} 
            color="#ffd966" 
            style={{ alignSelf: "center" }} />
            </View>
    )
}
