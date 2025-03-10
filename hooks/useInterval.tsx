import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useInterval = () => {
    const [savedIntervalValue, setSavedIntervalValue] = useState<string | undefined>(undefined);
    const [intervalInput, setIntervalInput] = useState<string | undefined>(undefined);
    const [intervalDuration, setIntervalDuration] = useState<number>(5);

    useEffect(() => {
        const fetchInterval = async () => {
            let interval = await AsyncStorage.getItem('savedInterval');
            if (!interval) {
                interval = '5'; // Default value if none is found
                await AsyncStorage.setItem('savedInterval', interval);
            }
            setSavedIntervalValue(interval?.toString() || '5');
            setIntervalInput(interval);
            setIntervalDuration(parseInt(interval, 10) * 1000); // Convert to milliseconds
        };
        fetchInterval();
    }, []);

    const handleIntervalChange = (text: string) => {
        const numericValue = parseInt(text, 10);
        if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 99) {
            setIntervalInput(text);
        } else if (text === '') {
            setIntervalInput(text); // Allow clearing the input
        }
    };

    const saveInterval = async () => {
        if (intervalInput) {
            await AsyncStorage.setItem('savedInterval', intervalInput);
            setSavedIntervalValue(intervalInput);
            setIntervalDuration(parseInt(intervalInput, 10) * 1000); // Convert to milliseconds
        }
    };

    return { savedIntervalValue, intervalInput, handleIntervalChange, saveInterval, intervalDuration };
};

export default useInterval;

// import { useState, useEffect } from 'react';
// import getSavedIntervalTime from '@/utils/IntervalTimeModule';

// const useInterval = () => {
//     const [savedIntervalValue, setSavedIntervalValue] = useState<string | undefined>(undefined);

//     useEffect(() => {
//         const fetchInterval = async () => {
//             const interval = await getSavedIntervalTime();
//             setSavedIntervalValue(interval?.toString() || '5');
//         };
//         fetchInterval();
//     }, []);

//     const handleIntervalChange = (text: string) => {
//         setSavedIntervalValue(text);
//     };

//     return { savedIntervalValue, handleIntervalChange };
// };

// export default useInterval;