import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './src/navigation/Stack';
import {Provider} from 'react-redux';
import store from './src/store/store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
