//react
import {React,useState} from 'react';
//react_native core comp
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation} from '@react-navigation/native';


const HomeScreen = ({navigation}) => {
    const [cnt,setCnt]=useState(0)
    return (
    <View >
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

export default HomeScreen