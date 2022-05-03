import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//screen
import SearchScreen from './Screens/SearchScreen';
import DisplayScreen from './Screens/DisplayScreen';
import DetailScreen from './Screens/DetailScreen';

const Stack = createStackNavigator();

function HomeScreenStack(){

    return(

        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>

            <Stack.Screen name='SearchScreen' component={SearchScreen} />
            <Stack.Screen name='DisplayScreen' component={DisplayScreen} />
            <Stack.Screen name='DetailScreen' component={DetailScreen} />


        </Stack.Navigator>

    );

}


export {HomeScreenStack};