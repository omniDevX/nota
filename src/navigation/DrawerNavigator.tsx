// src/navigation/DrawerNavigator.tsx
import CustomDrawerContent from "@/src/navigation/DrawerContent";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";

import { colors } from "../constants";
import HomeScreen from "../screens/HomeScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={({ route }) => {
                return {
                    drawerStyle: { width: 250 },
                    headerStyle: { backgroundColor: colors.main },
                    headerTintColor: '#fff',
                    drawerLabelStyle: { fontSize: 16 },
                };
            }}
        >
            <Drawer.Screen name="Zen Nota" component={HomeScreen} options={{ headerStyle: { backgroundColor: colors.main, }, }} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;