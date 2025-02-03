//react
import {React,useState} from 'react';
//navigation 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
//react_native core comp
import { View, Text, Button, StyleSheet } from 'react-native';
//src/comp
import BottomNavigationBar from './src/components/navigation_bar/bottom_navigation_bar';
import HomeScreen from './src/screen/home';
import ProfileScreen from './src/screen/profile';

import { styles } from './src/styles/stylesheet';
const Stack = createNativeStackNavigator();



const App = () => {
  return (
    <NavigationContainer >
      <View >
        <Stack.Navigator
          initialRouteName="Home"
            screenOptions={{
              //gestureEnabled: true, // 제스처로 화면 전환을 활성화
              //gestureDirection: 'horizontal', // 제스처 방향을 수평으로 설정
              //cardStyleInterpolator: CardStyleInterpolatoras.forHorizontalIOS, // 수평 슬라이드 애니메이션 설정
              // mobile 환경에서만 작동

              headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
        <BottomNavigationBar
           navigate_list={["Home","Profile"]}/>
      </View>
    </NavigationContainer>
    );
};


export default App;
