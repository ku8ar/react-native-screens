import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FastImage from 'react-native-fast-image'

enableScreens();

const IMAGES = {
  A: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Richard_Stallman_at_Marlboro_College.jpg",
  B: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg",
  C: "https://static.goldenline.pl/user_photo/019/user_5194259_2e4dc8_huge.jpg",
  D: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg"
}

const DetailsScreen = ({ navigation, route }) => {
  useEffect(() => {
    navigation.setOptions({
      title: `Details screen #${getIndex}`,
    });
  }, [navigation]);

  const getIndex = () => {
    return route.params && route.params.index ? route.params.index : 0;
  };

  const index = getIndex();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FastImage
          style={{ width: 200, height: 200 }}
          source={{ uri: IMAGES[route.name], }}
          resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

const createStack = () => {
  const Stack = createStackNavigator();

  const makeStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );

  return makeStack;
};

const AStack = createStack();
const BStack = createStack();
const CStack = createStack();
const DStack = createStack();

const Tab = createBottomTabNavigator();

const NavigationTabsAndStack = () => (
  <Tab.Navigator>
    <Tab.Screen name="A" component={DetailsScreen} />
    <Tab.Screen name="B" component={DetailsScreen} />
    <Tab.Screen name="C" component={DetailsScreen} />
    <Tab.Screen name="D" component={DetailsScreen} />
  </Tab.Navigator>
);

export default NavigationTabsAndStack;
