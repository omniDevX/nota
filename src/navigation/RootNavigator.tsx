// src/navigation/RootNavigator.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from '../navigation/DrawerNavigator';
import HomeScreen from '../screens/HomeScreen';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen name="MainDrawer" component={DrawerNavigator} options={{ headerShown: false }} />
                <RootStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;