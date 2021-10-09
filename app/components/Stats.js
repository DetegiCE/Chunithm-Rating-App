import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Stats extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View styles={styles.ratingContainer}>
          <View>
            <Text style={styles.mrText}>MAX RATING</Text>
            <Text style={styles.mrValue}>0</Text>
            <Text style={styles.mrDetail}>0.0000</Text>
          </View>
          <View>
            <Text style={styles.next01}>NEXT .01</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  ratingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mrText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
  },
  mrValue: {
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
  },
  mrDetail: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 15,
    fontStyle: 'italic',
  },
  next01: {
    color: 'black',
  },
});
