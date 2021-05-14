import { Alert } from "react-native"

export const SET_CART =(user)=>{
    // Alert.alert("in set cart");

    return{
        type : "SET_CART",
        payload : user
    }
};

