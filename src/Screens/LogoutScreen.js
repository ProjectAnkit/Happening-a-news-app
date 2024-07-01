import React, { useEffect,useContext } from 'react';
import { Text, StyleSheet,Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Context as UserContext } from '../Components/Reducer/user';

const LogoutScreen = ({navigation}) => {
  
    useEffect(()=>{
        navigation.setOptions({
            headerShown: false
        })
    },[])

    const {Signout_user} = useContext(UserContext)
    
    return(
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>You are logged in!</Text>
        <Button
            title="Logout"
            onPress={()=> Signout_user({navigation})}
            color="#5061ff"
        />
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "w500",
    marginBottom: 20,
    color: "#333",
  },
});

export default LogoutScreen;