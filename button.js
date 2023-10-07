import { StatusBar } from 'expo-status-bar';
import React, { useState} from  'react'
import { StyleSheet, View, Switch } from 'react-native';
import Weather from './weather';



export default function Button() {
  const [isEnabled, setIsEnabled] = useState(true);



  const toggleSwitch = () => {

    setIsEnabled(previousState => !previousState)
  }

  return (
    <View style={styles.container}>

      <Switch 
      
      style={styles.switch}
      trackColor={{false: 'red',true:'green' }}
      thumbColor={isEnabled? 'green': 'red'}
      ios_backgroundColor={isEnabled? 'darkgreen': 'darkred'}
      onValueChange={toggleSwitch}
      value={isEnabled}
      
      />
      <View>
        {isEnabled && <Weather />}
      </View>
      
      <StatusBar style="auto" />
      
    </View>
  ); 
}

const styles = StyleSheet.create({

  container: {
    width: '500px',
    height:'400px',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:15
  },
  switch:{
    margin:'12px'
  }

});
