
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
/* import store from './scr/store'; */
import MainNavigator from './scr/Navigators/MainNavigator';
import { MyDrawer } from './scr/Navigators/DrawerNavigator';
import { PersistGate } from 'redux-persist/integration/react';

import { store, storePersisted } from "./scr/store"
import { useEffect } from 'react';
import { init } from "./db"

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'OpenSansRegular': require("./assets/fonts/OpenSansRegular.ttf"),
    'QicksandBold': require("./assets/fonts/OpenSansBold.ttf"),
    'QickSandMedium': require('./assets/fonts/QuicksandMedium.ttf'),
    'OpenSansBold': require('./assets/fonts/OpenSansBold.ttf'),

  });




  init().then(
    () => {
      console.log('Database initialized');
    }
  ).catch(error => {
    console.log('Database fail connect.');
    console.log(error);
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={storePersisted} >
        <MainNavigator />
      </PersistGate>
    </Provider>
  )
};

