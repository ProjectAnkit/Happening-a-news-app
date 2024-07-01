import React, { useEffect, useRef} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Input } from 'react-native-elements';
import { useFonts } from 'expo-font';
import { Entypo } from '@expo/vector-icons';

const Authform = ({navigation,email,setEmail, password, setPassword, method, button, forgotpassword,navtext,navmethod,pagetitle}) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 200,
                easing: Easing.ease,
                useNativeDriver: true,
            }
        ).start();
    }, [fadeAnim, navigation]);

    const [isLoaded] = useFonts({
        "Roboto": require("./../../assets/fonts/Roboto-Regular.ttf"),
        "Bowlby": require("./../../assets/fonts/BowlbyOne-Regular.ttf"),
        "Gantari": require("./../../assets/fonts/Gantari-VariableFont_wght.ttf"),
      });

    if(!isLoaded){
        return <></>
    }

    return (
            <View style={styles.outerContainer}>
                <View style={styles.container}>
                <View>
                    <Text style={styles.pagetitle}>{pagetitle}</Text>
                </View>
                <Animated.View style={[{ opacity: fadeAnim },styles.input]}>
                    <Input
                        inputContainerStyle={{borderBottomWidth: 0,marginTop: "8%",}}
                        leftIcon={<Entypo name="mail" size={24} color="black" />}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Email"
                        style={{fontFamily: "Gantari"}}
                        keyboardType="email-address"
                        cursorColor={"#6200ee"}
                    />
                </Animated.View>
                <Animated.View style={[{ opacity: fadeAnim },styles.input]}>
                    <Input
                        inputContainerStyle={{borderBottomWidth: 0,marginTop: "8%",}}
                        leftIcon={<Entypo name="lock" size={24} color="black" />}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        placeholder="Password"
                        style={{fontFamily: "Gantari"}}
                        secureTextEntry={true}
                        cursorColor={"#6200ee"}
                    />
                </Animated.View>
                <Animated.View style={{ opacity: fadeAnim }}>
                    <TouchableOpacity style={styles.button} onPress={method}>
                        <Text style={styles.buttonText}>{button}</Text>
                    </TouchableOpacity>
                </Animated.View>
                {forgotpassword!==""?<Animated.View style={{ opacity: fadeAnim }}>
                    <TouchableOpacity style={styles.forgotPassword}>
                        <Text style={styles.forgotPasswordText}>forgot password?</Text>
                    </TouchableOpacity>
                </Animated.View> : null}
                <View style={styles.orContainer}>
                    <View style={styles.divider} />
                    <Text style={styles.orText}>OR</Text>
                    <View style={styles.divider} />
                </View>
                <Animated.View style={{ opacity: fadeAnim }}>
                    <TouchableOpacity style={styles.socialButton}>
                        <FontAwesome name="google" size={20} color="#DB4437" />
                        <Text style={styles.socialButtonText}>Continue with Google</Text>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={{ opacity: fadeAnim }}>
                    <TouchableOpacity style={styles.socialButton}>
                        <MaterialCommunityIcons name="facebook" size={20} color="#4267B2" />
                        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
                    </TouchableOpacity>
                </Animated.View>
                <TouchableOpacity style={styles.forgotPassword} onPress={navmethod}>
                        <Text style={styles.forgotPasswordText}>{navtext}</Text>
                    </TouchableOpacity>
            </View>
            </View>
            )
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    pagetitle:{
        fontSize: 28,
        fontWeight: "200",
        paddingBottom: 30,
        color: "white",
        fontFamily: "Bowlby"
    },
    outerContainer:{
        flex: 1,
        backgroundColor: "white"
    },
    container: {
        marginTop: "40%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        flex: 1,
        backgroundColor: "#5061ff",
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        alignItems: "center",
        width: '100%',
        justifyContent: "center",
        backgroundColor: "white",
        height: 60,
        padding: 10,
        marginBottom: 10,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    button: {
        width: '100%',
        height: 60,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: "Gantari"
    },
    forgotPassword: {
        marginBottom: 20,
        alignSelf: "center",
    },
    forgotPasswordText: {
        color: 'white',
        fontFamily: "Gantari"
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: 'white',
        marginHorizontal: 10,
    },
    orText: {
        fontSize: 16,
        color: 'white',
        fontFamily: "Gantari"
    },
    socialButton: {
        backgroundColor: "white",
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 50,
        padding: 10,
        marginBottom: 10,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    socialButtonText: {
        marginLeft: 10,
        fontSize: 16,
        fontFamily: "Gantari"
    },
});

export default Authform;
