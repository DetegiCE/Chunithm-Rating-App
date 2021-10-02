import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Scoretable from './app/components/Scoretable';
import Stats from './app/components/Stats';

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Scoretable">
          <Stack.Screen
            name="Scoretable"
            component={Scoretable}
            options={{
              title: '보면정수표 입력',
            }}
          />
          <Stack.Screen
            name="Stats"
            component={Stats}
            options={{
              title: '레이팅 통계',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
