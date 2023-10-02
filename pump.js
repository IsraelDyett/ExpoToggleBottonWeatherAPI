import { StatusBar } from 'expo-status-bar';
import React, { useState} from  'react'
import { StyleSheet, Text, View, Switch } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function Pump({pumpNum}) {
  const [isEnabled, setIsEnabled] = useState(true);
  const [text, setText] = useState('ON');

  const toggleSwitch = () => {
    if (isEnabled){
      setText('OFF');
    }else{
      setText('ON')
    }
    setIsEnabled(previousState => !previousState)
  }

  return (
    <View style={styles.container}>
      <View style={styles.pumpTextAndIcon}>
        <MaterialCommunityIcons name="pump"  size={24} color="navyblue" />
        <Text style={styles.pump}>Pump {pumpNum}</Text>
      </View>
      
      <Text style={styles.onOFFtext}>{text} </Text>
      <MaterialCommunityIcons name="water-pump" size={25}  color="navyblue" />
      <Switch 
      style={{margin:20}}
      trackColor={{false: 'grey',true: 'tomato'}}
      thumbColor={isEnabled? 'green': 'red'}
      ios_backgroundColor={isEnabled? 'darkgreen': 'darkred'}
      onValueChange={toggleSwitch}
      value={isEnabled}
      />
      <StatusBar style="auto" />
      
    </View>
  ); 
}

const styles = StyleSheet.create({

  container: {
    width: '150px',
    height:'230px',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:15
  },
  onOFFtext:{
    fontWeight: 'normal',
     marginBottom: 10,
     paddingTop:3,
     color: 'black',
  },
  pump:{
    fontSize: 19,
  },
  pumpTextAndIcon:{
    display:'inline-block',
    //paddingBottom: 15

  }
});
