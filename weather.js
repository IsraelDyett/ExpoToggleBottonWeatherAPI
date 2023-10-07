import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

function Weather() {
  const [location, setLocation] = useState('');
  const [todayData, setTodayData] = useState({});
  const [tomorrowData, setTomorrowData] = useState({});

  const apiKey = '895284fb2d2c50a520ea537456963d9c';

  const fetchWeatherData = async () => {
    try {
      const todayURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;
      const tomorrowURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;

      const todayResponse = await axios.get(todayURL);
      const tomorrowResponse = await axios.get(tomorrowURL);

      setTodayData(todayResponse.data);
      setTomorrowData(tomorrowResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={text => setLocation(text)}
        placeholder='Enter Location'
      />
      <Button title="Search" onPress={fetchWeatherData} />

     <View>
        
      <Text style={styles.weatherTitle}>Today's Weather:</Text>

      <View style={styles.weatherText}>
         <Text>Temperature: {todayData.main?.temp}°F</Text>
         <Text>Humidity: {todayData.main?.temp}°F</Text>
         <Text>Rain: {todayData.rain ? `${todayData.rain}mm` : null}</Text>
      </View>

      <Text style={styles.weatherTitle}>Tomorrow's Weather:</Text>

      <View style={styles.weatherText}>
         <Text>Temperature: {tomorrowData.main?.temp}°F</Text>
         <Text>Humidity: {tomorrowData.main?.temp}°F</Text>
         <Text>Rain: {tomorrowData.rain ? `${todayData.rain}mm` : null}</Text>
      </View>
     </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    input: {
      width: '100%',
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
      marginBottom: 10,
    },
    weatherTitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    weatherText: {
      fontSize: 16,
      margin:'5px',
      marginLeft:'20px'
    },
  });
  

export default Weather;
