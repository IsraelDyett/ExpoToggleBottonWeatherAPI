import { StatusBar } from 'expo-status-bar';
import React, { useState} from  'react'
import { StyleSheet, Text, View, Switch } from 'react-native';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [text, setText] = useState('Press The switch!');

  const toggleSwitch = () => {
    if (isEnabled){
      setText('Inactive');
    }else{
      setText('Active')
    }
    setIsEnabled(previousState => !previousState)
  }

  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', margin: 20}}>{text}</Text>
      <Switch 
      trackColor={{false: 'grey',true: 'tomato'}}
      thumbColor={isEnabled? '#f4f3f4': '#f4f3f4'}
      ios_backgroundColor={'grey'}
      onValueChange={toggleSwitch}
      value={isEnabled}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
