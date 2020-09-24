import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeWelcome from '../components/HomeWelcome'


// https://github.com/tiaanduplessis/react-native-datepicker-modal
// https://github.com/react-native-community/datetimepicker
// https://github.com/wix/react-native-calendars

function CalendarScreen () {

  return (
    <View style={styles.container}>
      <HomeWelcome/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#fff',
  },

});



export default CalendarScreen;