import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Mybutton = ({style,buttontxt,onpress,onpressin,onpressout,liveelevation}) => {
  return (
    <TouchableOpacity onPress={onpress} onPressIn={onpressin} onPressOut={onpressout}>  
                 <View style={[style,{elevation: liveelevation?10: 0}]}>
                   <Text>
                      {buttontxt}
                   </Text>
                 </View>
    </TouchableOpacity>
  )
}

export default Mybutton