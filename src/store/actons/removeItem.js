import { Alert } from "react-native"
export const REMOVE_CART =(user)=>{
    
    return{
        type : "REMOVE_CART",
        payload : user
    }
};