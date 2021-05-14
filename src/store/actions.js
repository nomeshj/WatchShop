

export default function (state=null,action){
  switch(action.type){
    case "SET_CART":
      return action.payload;
      //break;
  }
  return state;
}