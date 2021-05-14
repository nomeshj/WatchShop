import React,{Component,useState} from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Button,Image, Alert,ScrollView ,TouchableOpacity} from 'react-native';
import {SET_CART} from './store/actionTypes';
import {UPDATE_QUANTITY} from './store/actons/updateQuantity';
import {DISABLE_BUTTON} from './store/actons/disableButton'
import { bindActionCreators } from 'redux';
import styles from './style';
class Counter extends Component{
  static navigationOptions = {
    headerTransparent: true,
    headerTintColor: "red"
  };

  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      disabled:true
    };
  }
  addContent=(t)=>{
    this.setState({cart:t})
   // Alert.alert(JSON.stringify(this.state.cart.key))
     this.props.SET_CART(t);
     //this.props.UPDATE_QUANTITY(t);
     this.props.DISABLE_BUTTON(t);
     
  }

  createList=()=>{
      return this.props.data1.map((user)=>{
     
        return(
            <View style={{flex: 0,flexDirection:'column' }} >
        <View style={{ flexDirection: 'row',backgroundColor: 'powderblue',}}>
          <View style={{width: 150,height:200 }} >
          <Image source ={user.image} style = {styles.design}   />
          
          </View>
          
          <View style={{ flex :1 ,height:200, backgroundColor: 'skyblue'}} >
            <Text style={styles.content}>{user.title}</Text>
            <Text style={styles.price}> ₹ {user.price}</Text>
            <TouchableOpacity
              style ={styles.button}
              disabled={user.value}
              onPress={()=>this.addContent(user)}
              >
                <Text>Add to cart</Text>
              </TouchableOpacity>
            
          </View>
        </View>
        </View> 
        );
      })
  }

  render(){
      return(
        
        <View style={{flex:1,backgroundColor:'powderblue'}}>
        <View style={styles.titlebar} >
        <View style={{flex:1,flexDirection:'row',alignSelf:'center',alignItems:'flex-end'}} >
        <View>
        <Text style={{alignSelf:'center',alignItems:'center',justifyContent:'flex-end',fontSize:40,fontWeight:'bold'}}>Home </Text>
        </View>
      <View style={{alignSelf:'flex-end',alignItems:'flex-end',marginLeft:170}}>
        <TouchableOpacity  onPress={() =>
            this.props.navigation.navigate('cart')
          }>
          <Image source ={require('../cart1.jpg')} style = {styles.cart} />
          </TouchableOpacity> 
        </View>
          </View>
      </View>
        <ScrollView>
            <View>
              { this.createList()}
           
            </View>
         </ScrollView>
         </View>
      );
  }
}

const mapStateToProps=(state)=>{
  return{
      data1 : state.users,
  }
}

const mergedActions = {SET_CART, UPDATE_QUANTITY,DISABLE_BUTTON};
export default connect(mapStateToProps,mergedActions)(Counter);


