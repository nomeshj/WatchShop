import { Alert } from "react-native"
export const UPDATE_QUANTITY =(user)=>{
    
    return{
        type : "UPDATE_QUANTITY",
        payload : user,
        increment : 1
    }
};