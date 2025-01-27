import React, {Component,useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet,Image} from 'react-native';

const Pract = ()=>{
  const [count,setCount] = useState(0);
  return (
    <>
    <View style={styles.container}>

      <TouchableOpacity style={styles.button} onPress={()=>setCount(count+1)}>
        <Text>this button clicked {count}</Text>
      </TouchableOpacity>
      <Text>1</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
});
export default Pract;