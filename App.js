import 'react-native-gesture-handler'
import * as React from 'react';
import { Button, View , Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Listar from './opcoes/lista'
import Calcular from './opcoes/calculadora'
import Pastelaria from './opcoes/pastelaria'


function inicio({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Calculadora')}
        title="Calcular"
      />
      <Button
        onPress={() => navigation.navigate('Pastelaria')}
        title="Comprar pastel"
      />
      <Button
        onPress={() => navigation.navigate('Equipe')}
        title="Equipe"
      />
    </View>
  );
}

function calculadora({ navigation }) {
  return (
    <Calcular></Calcular>
  );
}

function pastelaria({ navigation }) {
  return (
    <Pastelaria></Pastelaria>
  );
}


function equipe({ navigation }) {
  return (
    <Listar></Listar>
  );
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Inicio" component={inicio} />
        <Drawer.Screen name="Calculadora" component={calculadora} />
        <Drawer.Screen name="Pastelaria" component={pastelaria} />
        <Drawer.Screen name="Equipe" component={equipe} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}