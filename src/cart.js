import React, { Component } from 'react';
import {Text, View,Button,Image, Alert,TouchableOpacity} from'react-native';
import { connect } from 'react-redux';
import {REMOVE_CART} from './store/actons/removeItem';
import {UPDATE_QUANTITY} from './store/actons/updateQuantity';
import {DECREASE_QUANTITY} from './store/actons/decreseQuantity'
import styles from './style'
import { ScrollView } from 'react-native-gesture-handler';

class Cart extends Component{

    removeCart =(t) =>{
        this.props.REMOVE_CART(t)
    }

    increment = (t) =>{
        this.props.UPDATE_QUANTITY(t)
    }

    decrement = (t) =>{
        
        this.props.DECREASE_QUANTITY(t);
    }

    createList=()=>{
      
        return this.props.data1.map((user)=>{
        return(
            <View style={{flex: 1,flexDirection:'column'}} >
        <View style={{flex:1, flexDirection: 'row',backgroundColor: 'powderblue',}}>
          <View style={{width: 150,height:220 }} >
           <Image source ={user.image} style = {styles.design}   /> 
          
          </View>
          
          <View style={{ flex :1 ,height:220, backgroundColor: 'skyblue'}} >
            <Text style={styles.content}>{user.title}</Text>
            <Text style={styles.price}>  ₹{user.price}</Text>


            <View style={{flex:1,flexDirection:'row',alignSelf:'center'}}>
            <View style={{flex:1}}>
            <TouchableOpacity
             style ={{height: 20, width:20 ,marginLeft:40,marginBottom:10,backgroundColor:'#2196F3',alignItems:'center'}} 
            onPress={()=>this.decrement(user)}><Text style={{color:'white',fontWeight:'bold'}}>-</Text></TouchableOpacity>
              </View>  
            {/* <Button title="-" onPress={()=>this.decrement(user)} style ={{height: 100, marginTop: 100, width:50 ,alignItems:'felx-end'}} />  */}
           
            <View style={{flex:1}}>
            <Text style={{fontWeight:'bold',marginLeft:25}}>{user.quantity}</Text>
            </View>
            <View style={{flex:1}}>
            <TouchableOpacity
             style ={{height: 20, width:20 ,backgroundColor:'#2196F3',alignItems:'center'}} 
            onPress={()=>this.increment(user)}><Text  style={{color:'white',fontWeight:'bold'}}>+</Text></TouchableOpacity>
            </View>
            {/* <Button title="+" onPress={()=>this.increment(user)} style ={{height: 10, marginTop: 100, width:50 ,alignItems:'felx-end'}} /> */}
            
            </View>
            <View style={{flex:1,justifyContent:'flex-end'}}>
            <Button title="remove" onPress={()=>this.removeCart(user)} />
            </View>
            
          </View>
        </View>
        </View> 

        );
        })
    }
    render(){
        if (this.props.Total1 == 0) {
            return(
            <View style={{flex:1,backgroundColor:'powderblue'}}>
            <Text style={styles.empty}>Cart is empty!</Text>
            <Text style={{fontSize: 20,alignSelf:'center'}}>Add some products.</Text>
            <TouchableOpacity 
                style={{height:30,width:80,alignSelf:'center',alignItems:'center',marginTop:30,
                backgroundColor:'#2196F3'}} 
                onPress={()=>this.props.navigation.navigate('counter')}
                >
                <Text style={{marginTop:5,color:'white'}}>Go Back</Text>
            </TouchableOpacity>
            </View>
            );
        }


        return(
          <View style={{flex:1,backgroundColor:'powderblue'}}>
            <ScrollView>
            <View style={{flex:1,alignItems:'stretch',justifyContent:'center'}}>
         { this.createList()}
           
            <View style={{flex:1,flexDirection:'column',borderTopWidth:1,borderTopColor:'black'}}>
            
           <Text style={{fontWeight:'bold',fontSize:30,alignSelf:'center'}}>Total= ₹ {this.props.Total1}</Text>
           <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
           <Button title="<- Go back"  onPress={()=>this.props.navigation.navigate('counter')}/>
           <Button title="Proceed to Checkout->" onPress={()=>this.props.navigation.navigate('address')} />
           </View>
           </View>
           </View>
           
            </ScrollView>
            </View>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        data1 : state.reducer1.cart1,
        Total1 : state.reducer1.total
    }
  }
  const mergedActions = {UPDATE_QUANTITY,REMOVE_CART,DECREASE_QUANTITY};
export default connect(mapStateToProps,mergedActions)(Cart);
