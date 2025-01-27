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

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [cnt,setCnt]=useState(0)
  return (
  <View style={styles.container}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Profile"
      onPress={() => navigation.replace('Profile')}
    />
    <Button
      title={`cnt ${cnt}`}
      onPress={() => setCnt(cnt+1)}
    />
  </View>
  );
}

const ProfileScreen = ({navigation}) =>{
  const [cnt,setCnt]=useState(0)

  return  (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.replace('Home')}
      />
      <Button
        title={`cnt ${cnt}`}
        onPress={() => setCnt(cnt+1)}
      />
    </View>
  );
}

const App = () => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
          screenOptions={{
            //gestureEnabled: true, // 제스처로 화면 전환을 활성화
            //gestureDirection: 'horizontal', // 제스처 방향을 수평으로 설정
            //cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // 수평 슬라이드 애니메이션 설정
            // mobile 환경에서만 작동

            headerShown: false,
          }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
      <BottomNavigationBar navigate_list={["Home","Profile"]}/>
    </NavigationContainer>
    </>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
