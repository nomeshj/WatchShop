import React from 'react';
import { View,Text,TextInput, StyleSheet,Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';

const AddressPage =(props)=>{
    
        return(
            <View style={{flex:1,alignSelf:'stretch',backgroundColor:'powderblue'}}>
            <View style={{flex:1,alignSelf:'center',backgroundColor:'powderblue',marginTop:30}}>
                    <View style={{flex:1,flexDirection:'column'}}>
                    <View style ={{flex:1,flexDirection:'row',}}>
                        <View style={{width:100}}>
                        <Text style={styles.addressText}>Name:</Text>
                        </View>
                        <View style={{width:200}}>
                        <TextInput style={styles.input}/>
                        </View>
                     
                    </View>
                    <View style ={{flex:1,flexDirection:'row'}}>
                        <View style={{width:100}}>
                        <Text style={styles.addressText}>Mobile NO:</Text>
                        </View>
                        <View style={{width:200}}>
                        <TextInput style={styles.input}/>
                        </View>
                     
                    </View>
                    
                    <View style ={{flex:1,flexDirection:'row',}}>
                        <View style={{width:100}}>
                        <Text style={styles.addressText}>Address Line 1:</Text>
                        </View>
                        <View style={{width:200}}>
                        <TextInput style={styles.input}/>
                        </View>
                     
                    </View>
                    <View style ={{flex:1,flexDirection:'row'}}>
                        <View style={{width:100}}>
                        <Text style={styles.addressText}>Address Line 2:</Text>
                        </View>
                        <View style={{width:200}}>
                        <TextInput style={styles.input}/>
                        </View>
                     
                    </View>
                    <View style ={{flex:1,flexDirection:'row',}}>
                        <View style={{width:100}}>
                        <Text style={styles.addressText}>State:</Text>
                        </View>
                        <View style={{width:200}}>
                        <TextInput style={styles.input}/>
                        </View>
                     
                    </View>
                    <View style ={{flex:1,flexDirection:'row'}}>
                        <View style={{width:100}}>
                        <Text style={styles.addressText}>City:</Text>
                        </View>
                        <View style={{width:200}}>
                        <TextInput style={styles.input}/>
                        </View>
                     
                    </View>
                    <View style ={{flex:1,flexDirection:'row',}}>
                        <View style={{width:100}}>
                        <Text style={styles.addressText}>Pincode:</Text>
                        </View>
                        <View style={{width:200}}>
                        <TextInput style={styles.input}/>
                        </View>
                     
                    </View>
                      
                <Button title="submit" onPress={()=> props.navigation.navigate('payment')} />
                    
            </View>
            </View>
        
            </View>
        );
    

}


export default AddressPage;