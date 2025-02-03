import React, { useState } from "react";
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from "../../styles/stylesheet";
import MainIcon from "./mainIcon";

const BottomNavigationBar = ({ navigate_list }) => {
    const navigation = useNavigation();
    const navigate_icon_list=navigate_list
    navigate_icon_list.splice(~~(navigate_icon_list.length/2),0,0)
    
    return (
        <View style={styles.navigationBarWrapper}>
            {navigate_icon_list.map((item) => {
                    if(item==0){
                        return <>n</>
                    }
                    return(
                    <Button key={item} title={item} 
                        onPress={() => navigation.navigate(item)} 
                    />
                    );
                }
                )
            }
            <View style={styles.mainIconWrapper}>
                <MainIcon />
            </View>
        </View>
    );
};

export default BottomNavigationBar;
