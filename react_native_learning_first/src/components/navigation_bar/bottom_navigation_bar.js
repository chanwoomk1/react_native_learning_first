import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';

const BottomNavigationBar=({navigate_list})=>{
    const navigation=useNavigation()
    return(
    <>
        <View>
            {navigate_list.map((item,idx)=>
                <Button key={idx} title={` ${item} go`} 
                    onPress={()=>{
                        navigation.navigate(item)
                    }
                }/>
            )}
        </View>
    </>
    );
}
export default BottomNavigationBar
