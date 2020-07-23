import React from 'react';
import { View, Text, Button } from 'react-native';
import RNUpiPayment from 'react-native-upi-payment'
const App = () => {
  return (
    <View style={{flex:1, backgroundColor:'lightblue', justifyContent:'center', alignItems:'center'}}>
        <Text>
          Pay with upi 20 rs.
        </Text>

        <Button onPress={()=>{
          RNUpiPayment.initializePayment({
            vpa: '9770003301@apl', // or can be john@ybl or mobileNo@upi
            payeeName: 'John Doe',
            amount: '20',
            transactionRef: 'aasf-332-aoei-fn'
          }, ()=>{ console.log('success')}, ()=>{console.log('failure')});

        }} title="pay with upi"/>
    </View>
  )
}
export default App;

