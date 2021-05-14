import { Alert } from "react-native"
export const DECREASE_QUANTITY =(user)=>{
    
    return{
        type : "DECREASE_QUANTITY",
        payload : user
    }
};