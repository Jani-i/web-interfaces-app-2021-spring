import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View, Text } from 'react-native';

export default function items() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://web-interfaces-2021.herokuapp.com/items')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}</Text>
          )}
        />
      )}
    </View>
  );
};