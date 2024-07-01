import {View,StyleSheet,FlatList, ActivityIndicator} from 'react-native';
import {useEffect, useState} from 'react';
import Newsbox from '../Components/Newsbox';
import Header from "../Components/Header";
import spacing from "../Components/Spacer";
import Axios from '../Components/Api/Axios';
import {API_KEY} from '@env';

export default function HomeScreen({navigation}){

   const [loading, setLoading] = useState(true)
   const [data, setData] = useState(null)
   const [searchText, setSearchText] = useState("")


   useEffect(() => {
     (async()=> {
       try{
           const response = await Axios.get(`/top-headlines?country=in&apiKey=${API_KEY}`)
           setData(response.data);
       }
       catch(e){
        console.error("error while fetching")
       }
       finally{
           setLoading(false)
       }
     })()
   }, [])
    

    const fetchSearchResult = async(searchText) => {
         setLoading(true)
        try {
            let url = `/top-headlines?country=in&apiKey=${API_KEY}`;
            if (searchText !== "") {
                url += `&q=${encodeURIComponent(searchText)}`;
            }
             const response = await Axios.get(url);
             setData(response.data);

         }catch (e) {
             console.error("error while fetching")
             setLoading(false)
         }
         finally {
             setLoading(false)
         }
    }


   if(loading)
   {
     return(
        <View style={style.loadingScreen}>
            <ActivityIndicator color={"black"} size={18}></ActivityIndicator>
        </View>
     )
   }

   return(
    <View style={style.screenBackground}>
        <Header setSearchText={setSearchText} searchText={searchText} fetchSearchResult={fetchSearchResult}/>
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
        loadingScreen : {
            backgroundColor: "#5061ff",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },

        screenBackground : {
            paddingTop: 50,
            backgroundColor: '#5061ff',
            flex: 1,
        },
    }
)





