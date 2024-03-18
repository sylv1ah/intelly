import react from 'react';
import {View, Text} from 'react-native';
export default function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <Text>Hello, how are you feeling today?</Text>
    </View>
  );
}
