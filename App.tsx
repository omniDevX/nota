// // App.tsx
import { registerRootComponent } from 'expo';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigator from './src/navigation/RootNavigator';

function App() {

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <RootNavigator />
        </GestureHandlerRootView>
    );
}

export default App;
registerRootComponent(App);
