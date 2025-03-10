// (stacks)/_layout.tsx ✅ ✅ Save Image ▶️ Start Slideshow ⏳ Set Interval Time (use a simple slider or dropdown)⏹️ Switch to Manual Mode
import React, {useEffect} from "react";
import { Stack, useNavigation, useLocalSearchParams } from "expo-router";

const StacksLayout = () => {
    const { catId, catTitle, catShortTitle } = useLocalSearchParams();  // Get the itemid from route params
    const navigation = useNavigation();

    useEffect(() => {
        // Update the header title dynamically
        if (catId) {
            navigation.setOptions({
                headerTitle: catShortTitle,  // Dynamically set the headerTitle to itemid
            });
        }
    }, [catId, navigation]);

    return (
        <Stack>
            <Stack.Screen name="cat2img" options={{ headerTitle: 'HomeD', title: 'DDD', headerShown: false }} />
            <Stack.Screen name="CatScreen" options={{ headerTitle: 'Home22D', title: 'DAsian2 Beauty', headerShown: false }} />
        </Stack>
    );
};

export default StacksLayout;


