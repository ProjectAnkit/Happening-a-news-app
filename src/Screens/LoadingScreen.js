import React, { useContext, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { Context as UserContext } from '../Components/Reducer/user';

const LoadingScreen = ({navigation}) => {
    const {checkAuth} = useContext(UserContext)
    useEffect(()=> {
        checkAuth({navigation});
    })
   
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#5061ff" />
            <Text style={styles.text}>Loading...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f8',
    },
    text: {
        marginTop: 20,
        fontSize: 16,
        color: '#5061ff',
    }
});

export default LoadingScreen;
