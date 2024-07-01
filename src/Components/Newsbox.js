import React from 'react'
import { Linking } from 'react-native'
import { View ,StyleSheet,Text,Image, TouchableOpacity} from 'react-native'

const openurl = (url)=>{
  Linking.openURL(url).catch(e => console.error("error while redirecting"))
}

const Newsbox = (props) => {
  
  const {title,urlToImage,content,url} = props.item
  
  const redirecttoweb = ()=> {
    openurl(url)
  }

  
  return (
   <TouchableOpacity onPress={()=> redirecttoweb()}>
      <View style={[styles.framestyle]}>
      
      <View>
        <Image source={urlToImage?{uri: urlToImage}: {uri :"https://thumbs.dreamstime.com/z/influencer-recording-video-multiple-devices-jpg-happy-playing-cinetic-sand-using-214721040.jpg?ct=jpeg"}} style={styles.imagestyle}/>
      </View>

      <View>
        <Text style={{fontSize: 18,color: "black",fontWeight: "500"}}>{title}</Text>
      </View>

      <View>
        <Text style={{fontSize: 14,color: "grey",fontWeight: "400"}}>{content}</Text>
      </View>
      
    </View>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create(
    {
        imagestyle: {
           height: 140,
           width: "100%",
           borderRadius: 10
        },

        framestyle : {
            borderColor: "#acb4ff",
            backgroundColor: "#acb4ff",
            justifyContent: "center",
            flexDirection: "column",
            marginBottom: 10,
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 10,
            borderWidth: 3,
            height: "auto",
            width: "90%",
        },
    }
)
export default Newsbox