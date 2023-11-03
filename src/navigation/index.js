/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import Signin from '../pages/auth/signin';
import Home from '../pages/home';
import Detail from '../pages/home/detail';

const Stack = createStackNavigator();

function NavigationApp() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

export default NavigationApp;
