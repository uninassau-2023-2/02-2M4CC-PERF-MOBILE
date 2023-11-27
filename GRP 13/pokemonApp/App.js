import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Senhas from './Senhas';
import UltimasSenhasChamadas from './UltimasSenhasChamadas';
import RelatorioDiario from './RelatorioDiario'; 

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Senhas" component={Senhas} />
        <Stack.Screen name="UltimasSenhasChamadas" component={UltimasSenhasChamadas} />
        <Stack.Screen name="RelatorioDiario" component={RelatorioDiario} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
