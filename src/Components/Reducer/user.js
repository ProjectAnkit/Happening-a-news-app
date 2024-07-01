import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from '@firebase/auth';
import useReducer from './useReducer';
import {firebaseAuth} from '../../../firebaseConfig';

const userReducer = (state,actions) => {
    switch(actions.type){
        case 'error':
            return {...state,'error': actions.payload}
        default: return state
    }
}

    const checkAuth = (dispatch) => {
        return({navigation})=>{
            if(firebaseAuth.currentUser){
               navigation.navigate("Bottom Tabs")
            }
            else{
                navigation.navigate("Start")
            }
        }
    }


    const Login_user = (dispatch) => {
        return async({email,password,navigation})=>{

            try{  
                await signInWithEmailAndPassword(firebaseAuth,email,password);
                navigation.navigate('Bottom Tabs')
            }
            catch(e){
                console.error("Error during user login:", e.code, e.message);
            }
        }
}

const Signup_user = (dispatch) => {
    return async({email,password,navigation})=>{

        try{  
            await createUserWithEmailAndPassword(firebaseAuth, email, password);
            console.log("User created successfully");
            navigation.navigate('Login')
        }
        catch(e){
            console.error("Error during user login: ", e.code, e.message);
        }
    }
}


const Signout_user = (dispatch) => {
    return async({navigation})=>{
        try{
            await firebaseAuth.signOut();
            navigation.navigate("Login")
        }
        catch(E){
            console.error("error in signing out: ",E.message);
        }
    }
}

export const {Context,Provider} = useReducer(userReducer,{Login_user,Signup_user,checkAuth,Signout_user},{error:"",user:""})