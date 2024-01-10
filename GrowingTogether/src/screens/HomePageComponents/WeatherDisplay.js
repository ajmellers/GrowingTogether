import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const API_KEY = 'f6516f0bc1cf3cc14750eaf2715620cb';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

const WeatherDisplay = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // get user's current location
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // make API request to fetch weather data for user's location
        fetch(`${API_URL}&lat=${latitude}&lon=${longitude}&units=metric`)
          .then((response) => response.json())
          .then((data) => setWeatherData(data))
          .catch((error) => console.error(error));
      },
      (error) => console.error(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  if (!weatherData) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const { name, main } = weatherData;

  return (
    <View style={{ backgroundColor: "orange", padding: 10 }}>
      <Text style={styles.weatherText} >Location: {name} Temp: {main.temp}°C </Text>
      <Text style={styles.weatherText} >Humidity: {main.humidity}%  & {weatherData.weather[0].description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherText: {
    fontSize: 13,
    fontStyle: 'italic',
    textAlign: 'center',
    padding: 5,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export { WeatherDisplay };