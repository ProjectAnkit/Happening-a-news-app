import React, {useContext, useState, useEffect } from 'react';
import {StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Context as UserContext } from '../Components/Reducer/user';
import Authform from '../Components/Authform';

const SignupScreen = () => {

    const {Signup_user} = useContext(UserContext)
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
            <Authform navigation={navigation} email={email} password={password} setEmail={setEmail} setPassword={setPassword} method={()=> Signup_user({email,password,navigation})} button={"Signup"} forgotpassword={""} navtext={"Already have an account? login"} navmethod={()=> navigation.navigate("Login")} pagetitle={"Signup here"}/>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
});

export default SignupScreen;
