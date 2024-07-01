import React, {useContext, useState, useEffect } from 'react';
import {StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Context as UserContext } from '../Components/Reducer/user';
import Authform from '../Components/Authform';

const LoginScreen = () => {

    const {Login_user} = useContext(UserContext)
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    })

    return (
        <LinearGradient
            colors={['#6200ee','#6200ee']} // Add your preferred colors here
            style={styles.gradient}
        >
            <Authform navigation={navigation} email={email} password={password} setEmail={setEmail} setPassword={setPassword} method={()=> Login_user({email,password,navigation})} button={"login"} forgotpassword={"forgotPassword"} navtext={"Don't have an account? Sign up"} navmethod={()=> navigation.navigate("Signup")} pagetitle={"Login here"}/>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
});

export default LoginScreen;
