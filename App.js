
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { useEffect } from 'react';

import MainNavigator from './scr/navigators/MainNavigator';
import { PersistGate } from 'redux-persist/integration/react';
import { store, storePersisted } from "./scr/store"


SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'OpenSansRegular': require("./assets/fonts/OpenSansRegular.ttf"),
    'QicksandBold': require("./assets/fonts/OpenSansBold.ttf"),
    'QickSandMedium': require('./assets/fonts/QuicksandMedium.ttf'),
    'OpenSansBold': require('./assets/fonts/OpenSansBold.ttf'),

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

