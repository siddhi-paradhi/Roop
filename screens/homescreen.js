import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to ROOP</Text>
      <Button title="Go to Try-On" onPress={() => navigation.navigate('TryOn')} />
    </View>
  );
}
