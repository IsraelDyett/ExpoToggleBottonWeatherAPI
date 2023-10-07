
import React from  'react';
import { StyleSheet, Text, View} from 'react-native';
import Pump from './pump';
import Button from './button';

export default function App() {

  return (
    <View style={styles.container}>
     <View style={{margin: 6}}><Pump pumpNum={1}/></View>
     <View style={{margin: 6}}><Pump pumpNum={2}/></View>
     <View ><Button/></View>
    </View>
  ); 
}

const styles = StyleSheet.create({

  container: {
    width:"100%",
    height:"100%",
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    display:'flex',
    
  }
});
