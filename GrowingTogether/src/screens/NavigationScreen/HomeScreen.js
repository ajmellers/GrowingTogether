import React from 'react';
import { View, Text } from 'react-native';
import { Calendar } from '../HomePageComponents/Calendar';
import { WeatherDisplay } from '../HomePageComponents/WeatherDisplay';

export default function HomeScreen() {
  return (
    <View>
      <WeatherDisplay/>
      <Calendar />
    </View>
  );
}
