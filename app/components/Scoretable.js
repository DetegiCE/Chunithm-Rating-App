import React from 'react';
import {View, Button, StyleSheet, ScrollView} from 'react-native';
import {Table, Row} from 'react-native-table-component';

import songs from '../assets/songs.json';

export default class Scoretable extends React.Component {
  constructor(props) {
    super(props);

    this.fields = songs;
    this.state = {
      tableHead: ['ID', '난이도', '곡명', '레벨', '점수'],
      widthArr: [2, 4, 10, 3, 4],
    };
  }
  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < this.fields.length; i += 1) {
      const rowData = [];
      rowData.push(this.fields[i].id);
      rowData.push(this.fields[i].dif);
      rowData.push(this.fields[i].title);
      rowData.push(this.fields[i].level);
      rowData.push('');
      tableData.push(rowData);
    }
    console.log(tableData);
    return (
      <View style={styles.container}>
        <Button onPress={() => this.goStatsScreen()} title="레이팅 통계 확인" />
        <Table
          borderStyle={{borderColor: '#C1C0B9'}}
          style={styles.headerTable}>
          <Row
            data={state.tableHead}
            flexArr={state.widthArr}
            style={styles.header}
            textStyle={styles.headerText}
          />
        </Table>
        <ScrollView>
          <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
            {tableData.map((rowData, index) => (
              <Row
                key={index}
                data={rowData}
                flexArr={state.widthArr}
                textStyle={styles.rowText}
              />
            ))}
          </Table>
        </ScrollView>
      </View>
    );
  }

  goStatsScreen() {
    this.props.navigation.navigate('Stats');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerTable: {
    marginTop: 10,
    backgroundColor: '#808B97',
  },
  header: {
    height: 40,
  },
  headerText: {
    color: '#fff',
    textAlign: 'center',
  },
  rowText: {
    color: '#000',
    textAlign: 'center',
    padding: 5,
  },
});
