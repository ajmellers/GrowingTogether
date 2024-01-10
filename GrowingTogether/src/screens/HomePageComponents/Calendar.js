import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const getCurrentDate = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const date = new Date();
  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const numDate = date.getDate();
  return `${day}, ${month} ${numDate}`;
};

const vegetablesToPlantByMonth = {
  Jan: ['Carrots', 'Lettuce', 'Spinach'],
  Feb: ['Broccoli', 'Cauliflower', 'Peas'],
  Mar: ['Beets', 'Radishes', 'Swiss Chard'],
  Apr: ['Beans', 'Cucumbers', 'Zucchini'],
  May: ['Corn', 'Tomatoes', 'Peppers'],
  Jun: ['Eggplant', 'Okra', 'Watermelon'],
  Jul: ['Basil', 'Cilantro', 'Dill'],
  Aug: ['Kale', 'Collard Greens', 'Mustard Greens'],
  Sep: ['Arugula', 'Endive', 'Radicchio'],
  Oct: ['Garlic', 'Onions', 'Shallots'],
  Nov: ['Brussels Sprouts', 'Kohlrabi', 'Turnips'],
  Dec: ['Celery', 'Parsnips', 'Potatoes'],
};

const vegetablesToHarvestByMonth = {
  Jan: ['Brussels Sprouts', 'Cabbage', 'Kale', 'Leeks', 'Parsnips', 'Swede'],
  Feb: ['Brussels Sprouts', 'Cabbage', 'Kale', 'Leeks', 'Parsnips', 'Swede'],
  Mar: ['Brussels Sprouts', 'Cabbage', 'Kale', 'Leeks', 'Parsnips', 'Purple Sprouting Broccoli', 'Swede'],
  Apr: ['Asparagus', 'Jersey Royal Potatoes', 'Kale', 'Lettuce', 'Purple Sprouting Broccoli', 'Radish', 'Rocket', 'Spinach'],
  May: ['Asparagus', 'Jersey Royal Potatoes', 'Lettuce', 'Peas', 'Radish', 'Rocket', 'Spinach'],
  Jun: ['Broad Beans', 'Jersey Royal Potatoes', 'Lettuce', 'Peas', 'Radish', 'Rocket', 'Spinach', 'Strawberries'],
  Jul: ['Broad Beans', 'Carrots', 'Courgettes', 'Garlic', 'Jersey Royal Potatoes', 'Lettuce', 'Peas', 'Radish', 'Raspberries', 'Rocket', 'Runner Beans', 'Spinach', 'Tomatoes'],
  Aug: ['Blackberries', 'Carrots', 'Cauliflower', 'Garlic', 'Jersey Royal Potatoes', 'Lettuce', 'Peas', 'Raspberries', 'Runner Beans', 'Spinach', 'Sweetcorn', 'Tomatoes'],
  Sep: ['Apples', 'Blackberries', 'Carrots', 'Cauliflower', 'Garlic', 'Jersey Royal Potatoes', 'Kale', 'Leeks', 'Onions', 'Pears', 'Plums', 'Pumpkins', 'Raspberries', 'Runner Beans', 'Spinach', 'Sweetcorn', 'Tomatoes'],
  Oct: ['Apples', 'Beetroot', 'Broccoli', 'Brussels Sprouts', 'Cabbage', 'Carrots', 'Cauliflower', 'Kale', 'Leeks', 'Onions', 'Parsnips', 'Pears', 'Plums', 'Pumpkins', 'Swede', 'Turnips'],
  Nov: ['Beetroot', 'Brussels Sprouts', 'Cabbage', 'Carrots', 'Cauliflower', 'Kale', 'Leeks', 'Onions', 'Parsnips', 'Swede', 'Turnips'],
  Dec: ['Brussels Sprouts', 'Cabbage', 'Jerusalem Artichokes', 'Kale', 'Leeks', 'Onions', 'Parsnips', 'Swede', 'Turnips'],
};

const Calendar = () => {
  const currentMonth = getCurrentDate().split(', ')[1].slice(0, 3);
  const veggiesForPlantMonth = vegetablesToPlantByMonth[currentMonth] || [];
  const veggiesToHarvestByMonth = vegetablesToHarvestByMonth[currentMonth] || [];

  return (
    <View>
      <Text style={styles.headerText}>{getCurrentDate()}</Text>
      <Text style={styles.headerText}>Vegetables to plant this Month:</Text>
      <Text style={styles.veggieText}>
         {veggiesForPlantMonth.join(', ')}
      </Text>
      <Text style={styles.headerText}>Vegetables to pick this Month:</Text>
      <Text style={styles.veggieText}>
       {veggiesToHarvestByMonth.join(', ')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  veggieText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    padding: 4,
  },
});

export { Calendar }; 