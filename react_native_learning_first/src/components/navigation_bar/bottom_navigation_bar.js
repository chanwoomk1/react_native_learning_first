import React from "react";
import { View, Text, Button} from 'react-native';
import {
  useNavigation,
} from '@react-navigation/native';

const BottomNavigationBar=({navigate_list})=>{
    const navigation=useNavigation()
    return(
    <>
        <View>
            {navigate_list.map((item)=>
                <Button key={item} title={` ${item} go`} 
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
