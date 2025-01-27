import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BottomNavigationBar=({navigate_list})=>{
    const navigation = useNavigation();
    return(
    <>
        <View style={styles.navBar}>
            {navigate_list.map((item,idx)=>
                <Button key={idx} title={` ${item} go`} 
                    onPress={()=>{
                        navigation.replace(item)
                    }
                }/>
            )}
        </View>
    </>
    );
}
export default BottomNavigationBar
