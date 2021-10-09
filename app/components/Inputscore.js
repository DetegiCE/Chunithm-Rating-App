import React, {Component} from 'react';
import {AppRegistry, StyleSheet, TextInput} from 'react-native';
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
    try {
      await AsyncStorage.setItem('@ChuniRateScore:' + songId, score);
    } catch (error) {
      console.log('Error saving Data' + error);
    }
  }

  async getScore(songId) {
    try {
      const value = await AsyncStorage.getItem('@ChuniRateScore:' + songId)
        .text;
      this.setState({myKey: value});
    } catch (error) {
      console.log('Error retrieving Data' + error);
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
        value={this.state.myKey === null ? '' : String(this.state.myKey)}
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

AppRegistry.registerComponent('Inputscore', () => Inputscore);
