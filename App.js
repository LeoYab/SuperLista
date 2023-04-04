
import * as SplashScreen from 'expo-splash-screen'; 
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import store from './scr/store';
import MainNavigator from './scr/Navigators/MainNavigator';
import { MyDrawer } from './scr/Navigators/DrawerNavigator';

import { useEffect } from 'react';
 
SplashScreen.preventAutoHideAsync();  

export default function App() {

const [fontsLoaded] = useFonts({
    'OpenSansRegular': require("./assets/fonts/OpenSansRegular.ttf"),
    'QicksandBold': require("./assets/fonts/OpenSansBold.ttf"),
    'QickSandMedium': require('./assets/fonts/QuicksandMedium.ttf'),
    'OpenSansBold': require('./assets/fonts/OpenSansBold.ttf'),

  });

 /* const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]); 
 
 if (!fontsLoaded) {
    return null;
  }
  */

  useEffect(() =>{
    if(fontsLoaded){
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if(!fontsLoaded){
    return null;
  }

  return (
    <Provider store={store} >
      <MainNavigator />
    </Provider>
  )
};

