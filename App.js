import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { NavigationContainer } from '@react-navigation/native';

 const Stack = createNativeStackNavigator();
export default function App() {
  const [isFontsLoaded] = useFonts({
  
    regular: require('./assets/fonts/Poppins-Regular.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    extraBold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
    light: require('./assets/fonts/Poppins-Light.ttf'),
    semiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    bold: require('./assets/fonts/Poppins-Bold.ttf'),
    
  })

  // Works like useEffect but also accepts async functions and can return a value .
 const onLayoutRootView = useCallback(async () => {
  if (isFontsLoaded) {
    await SplashScreen.hideAsync();
  }
  }, [isFontsLoaded]);

  if (!isFontsLoaded) {
    return null;
  }


  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Bottom Navigation" component={BottomTabNavigation} />
    </Stack.Navigator>
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
  textStyle:{
    fontFamily: 'regular',
    fontSize: 15,
  }
});
