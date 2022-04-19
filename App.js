import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import Tabs from './navigation/tabs';
import { Home, OrderDelivery, Restaurant } from './screens';


const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions = {{
          headerShown: false
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen name='Tabs' component={Tabs}/>
        <Stack.Screen name='OrderDelivery' component={OrderDelivery}/>
        <Stack.Screen name='Restaurant' component={Restaurant}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;