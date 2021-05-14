import { Alert } from "react-native"
export const DISABLE_BUTTON =(user)=>{
    
    return{
        type : "DISABLE_BUTTON",
        payload : user,
        value1 : true
    }
};