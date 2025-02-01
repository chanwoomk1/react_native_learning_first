//react
import {React,useState} from 'react';
//react_native core comp
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { styles } from '../styles/stylesheet';

const ProfileScreen = () =>{
    const navigation=useNavigation()
    const [cnt,setCnt]=useState(0)
  
    return  (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Button 
          style={styles.buttonRed}
          title="Go to Home"
          onPress={() => navigation.replace('Home')}
        />
        <Button
          title={`cnt ${cnt}`}
          onPress={() => setCnt(cnt+1)}
        />
        <Text>prof</Text>
      </View>
    );
  }

export default ProfileScreen
