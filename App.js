import * as React from 'react';
import { Button, View, Image, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import art from './images/art.png';
import icon from './images/icon.png';
import mile from './images/mile.png';
import pier from './images/pier.png';
import water from './images/water.png';
import willis from './images/willis.png';
import * as SplashScreen from 'expo-splash-screen';

function ArtInstituteOfChicago({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={art} />
    </View>
  );
}

function MagnificentMile({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={mile} />
    </View>
  );
}

function NavyPier({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={pier} />
    </View>
  );
}

function WaterTower({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={water} />
    </View>
  );
}

function WillisTower({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={willis} />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {

  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Art Institute Of Chicago" component={ArtInstituteOfChicago} />
        <Drawer.Screen name="Magnificent Mile" component={MagnificentMile} />
        <Drawer.Screen name="Navy Pier" component={NavyPier} />
        <Drawer.Screen name="Water Tower" component={WaterTower} />
        <Drawer.Screen name="Willis Tower" component={WillisTower} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 480,
  }
});