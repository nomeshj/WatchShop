import { Alert } from "react-native"
import data from '../data'
const istate = {
    color :'red',
    total :0,
    cart1 : [],
    users : [{
        key: "1",
        title: ' ATTRACTIONZ Analogue Black Dial ',
        price:  500,
        value:false,
        quantity:0,
        image :require('../watch/first.jpg'),
        
      },
      {
        key: "2",
        title: 'Micacchi Analogue Mens Watch',
        price: 549,
        value:false,
        quantity:0,
        image :require('../watch/second.jpg'),
      },
      {
        key: "3",
        title: 'Time Teacher - Analogue Mens Watch ',
        price: 339,
        value:false,
        quantity:0,
        image:require('../watch/third.jpg'),
      },
      
           {
            key: "4",
            title: 'SKMEI Analogue - Digital Mens & Boys Watch',
            price: 460,
            value:false,
            quantity:0,
            image:require('../watch/fourth.jpg'),
          },
           {
            key: "5",
            title: 'Urban Herringbone Analog Black Dial',
            price: 300,
            value:false,
            quantity:0,
            image:require('../watch/fifth.jpg'),
          },
           {
            key: "6",
            title: 'Fastrack reflex 2.0 Watches',
            price: 400,
            value:false,
            quantity:0,
            image:require('../watch/sixth.jpg'),
          },
      
      ]

}

const reducer1 =(state=istate,action)=>{
    switch(action.type){
        case 'SET_CART':
            {
            
                const addedItem = state.users.find(item=>item.key === action.payload.key)
                const existedItem = state.cart1.find(item=> action.payload.key === item.key)
                
                if(existedItem)
                {
                    addedItem.quantity += 1
                    return{
                        ...state,
                        total:state.total +addedItem.price
                    }
                }
                else{
                    addedItem.quantity = 1;
                    const newTotal = state.total + addedItem.price
                    
                
                return{
                    ...state,
                    cart1:[...state.cart1,addedItem],
                    total : newTotal
                }
            }
                  
     }
            case 'REMOVE_CART':
                {
                // return {...state,cart1:state.cart1.filter(cart1 => cart1.key !== action.payload.key)};
                    const removeItem = state.cart1.find(item=>action.payload.key === item.key)
                    const newItem = state.cart1.filter(item=>action.payload.key !== item.key)
                    const newTotal = state.total -(removeItem.price * removeItem.quantity)

                    return{
                        ...state,
                        cart1:newItem,
                        total : newTotal
                    }

                }

            case  'UPDATE_QUANTITY':
                {
               
                const addedItem = state.users.find(item=>item.key === action.payload.key)
              
                
                    addedItem.quantity += 1
                    const newTotal = state.total + addedItem.price
                    return{
                        ...state,
                        total:newTotal
                    }
                
                
         }
         case  'DECREASE_QUANTITY':
     {

            const addedItem = state.cart1.find(item=>item.key === action.payload.key)
            
            if(addedItem.quantity === 1)
            {
                const newItem = state.cart1.filter(item=>item.key !== action.payload.key)
                const newTotal = state.total - addedItem.price
                return{
                    ...state,
                    cart1:newItem,
                    total:newTotal
                }
            }
            else{
                addedItem.quantity -= 1
                const newTotal =state.total - addedItem.price
                return{
                    ...state,
                    total:newTotal
                }
            }
                
            
            
     }

        default :
                return state;

    }
}

export default reducer1;