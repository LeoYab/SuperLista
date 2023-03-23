import { StyleSheet } from 'react-native';


import { Provider } from 'react-redux';
import store from './scr/store';
import MainNavigator from './scr/Navigators/MainNavigator';

export default function App() {

  return (
    <Provider store={store} >
    <MainNavigator />
    </Provider>
  )
};

const styles = StyleSheet.create({});
