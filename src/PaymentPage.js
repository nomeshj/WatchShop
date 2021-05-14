import React from 'react';
import { View, Text, Alert, Button } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';

// import CODButton from './PaymentButtons/CODButton'
// import CardButton from './PaymentButtons/CardButton'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { connect } from 'react-redux';

class PaymentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      valueData: '',
    };
  }

  parsePayment = (value) => {
    //if (value == 'item1')
    return (
      <View
        style={{
          flex: 0,
          flexDirection: 'column',
          alignSelf: 'center',
          backgroundColor: 'brown',
        }}>
        <Text>hello from fun </Text>
      </View>
    );
  };

  onSelect(index, value) {
    this.setState({
      // text: `Selected index: ${index} , value: ${value}`
      valueData: value,
    }),
      this.fun(value);
  }
  fun(val) {
    if (this.state.valueData == 'item1') {
      return (
        <p>
          <Button title="cod" />
        </p>
      );
    }
  }

  render(props) {
    const pay = this.state.valueData;
    if (pay == 'Cash On Delivery') {
      return (
        <View style={{ flex: 1, backgroundColor: 'powderblue' }}>
          <Text style={{ fontSize: 30 }}>Confirm your payment?</Text>
          <Text style={{ fontSize: 20 }}>Total=₹{this.props.Total1}</Text>
          <Button
            title="COD"
            onPress={() => this.props.navigation.navigate('thanks')}
          />
        </View>
      );
    }

    if (pay == 'Debit/Credit Card Payment') {
      return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ backgroundColor: 'red', width: 50 }}>
            <Text style={{ fontWeight: 'bold' }}>Card</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              backgroundColor: 'powderblue',
            }}>
            <View>
              <Text style={{ fontWeight: 'bold' }}>
                Enter Debit /Credit Card
              </Text>
            </View>
            <View>
              <TextInput style={styles.input} />
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}>
                <Text style={{ fontWeight: 'bold' }}>month/year</Text>
                <Text style={{ fontWeight: 'bold', alignSelf: 'flex-start' }}>
                  cvv
                </Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}>
                <TextInput style={styles.smallInput} />
                <TextInput style={styles.smallInput} />
              </View>
            </View>

            <View>
              <Text style={{ fontWeight: 'bold' }}>Name on Card</Text>
            </View>
            <View>
              <TextInput style={styles.input} />
            </View>

            <View>
              <Button
                title="submit"
                onPress={() => this.props.navigation.navigate('thanks')}
              />
            </View>
          </View>
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: 'powderblue',
            justifyContent: 'center',
          }}>
          <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 30 }}>
              select Payment method
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
            <RadioGroup
              onSelect={(index, value) => this.onSelect(index, value)}
              style={{ marginTop: 10 }}>
              <RadioButton value={'Cash On Delivery'}>
                <Text style={{ fontSize: 20 }}>Cash On Delivery</Text>
              </RadioButton>

              <RadioButton value={'Debit/Credit Card Payment'}>
                <Text style={{ fontSize: 20 }}>Debit/Credit Card Payment</Text>
              </RadioButton>
            </RadioGroup>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data1: state.reducer1.cart1,
    Total1: state.reducer1.total,
  };
};

export default connect(mapStateToProps)(PaymentPage);
