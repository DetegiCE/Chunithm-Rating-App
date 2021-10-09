import React, {Component} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Inputscore extends Component {
  constructor(props, songId) {
    super(props);
    this.state = {
      myKey: null,
    };
    this.songId = songId;
  }

  async setScore(songId, score) {
    await AsyncStorage.setItem('@ChuniRateScore:' + songId, score);
  }

  async getScore(songId) {
    try {
      return await AsyncStorage.getItem('@ChuniRateScore:' + songId);
    } catch (error) {
      return '';
    }
  }

  render() {
    return (
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="점수 입력"
        placeholderTextColor="#999999"
        keyboardType="numeric"
        value={Object.valueOf(this.getScore(this.songId))}
        onChangeText={text => this.setScore(this.songId, text)}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    textAlign: 'center',
    color: 'black',
  },
});
