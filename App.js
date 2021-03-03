//import { StatusBar } from 'expo-status-bar';
//import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import Item from './components/Item'
//import items from './components/Items'
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, ScrollView } from 'react-native';

export default function App() {
  
  useEffect(() =>{
    fetchPostInfo();
}, []);

const [postData, setData] = useState([]);

const fetchPostInfo = async () => {
    const data = await fetch('https://web-interfaces-2021.herokuapp.com/items')
    const postData = await data.json();
    setData(postData);
  console.log(postData)
}

return (
      <View>
        <Text>{postData}</Text>
        
      </View>
)

}





  
  
  
  
  
  
  
  
  /*return (
    <View style={styles.container}>
      <Items/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
