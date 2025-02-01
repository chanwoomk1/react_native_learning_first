//react
import {React,useState} from 'react';
//react_native core comp
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation} from '@react-navigation/native';


const ProfileScreen = ({navigation}) =>{
    const [cnt,setCnt]=useState(0)
  
    return  (
      <View>
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

export default ProfileScreen
