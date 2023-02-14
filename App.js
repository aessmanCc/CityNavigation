import { StyleSheet, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

const art = require('./assets/art.png');
const mile = require('./assets/mile.png');
const pier = require('./assets/pier.png');
const water = require('./assets/water.png');
const willis = require('./assets/willis.png');

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

function ArtInstitue() {
  return (
    <View style={styles.container}>
      <Image source={art} style={styles.imageContainer}/>
    </View>
  );
}

function MagMile() {
  return (
    <View style={styles.container}>
      <Image source={mile} style={styles.imageContainer}/>
    </View>
  );
}

function NavyPier() {
  return (
    <View style={styles.container}>
      <Image source={pier} style={styles.imageContainer}/>
    </View>
  );
}

function WaterTower() {
  return (
    <View style={styles.container}>
      <Image source={water} style={styles.imageContainer}/>
    </View>
  );
}

function WillisTower() {
  return (
    <View style={styles.container}>
      <Image source={willis} style={styles.imageContainer}/>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Art Institute of Chicago">
        <Drawer.Screen name="Art institute of Chicago" component={ArtInstitue} />
        <Drawer.Screen name="Magnificent Mile" component={MagMile} />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    height: 480,
    width: 320,
  },
});
