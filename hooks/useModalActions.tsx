import { useState } from 'react';

const useModalActions = (images: string[], currentIndex: number, setImages: (images: string[]) => void) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isIntervalInputVisible, setIsIntervalInputVisible] = useState(false);

    const handleChangeInterval = () => {
        setIsIntervalInputVisible(true); // Show the text input
    };

    const modalOptions = [
        { label: 'Change Interval', onPress: handleChangeInterval },
    ];

    return {
        modalVisible,
        setModalVisible,
        isIntervalInputVisible,
        setIsIntervalInputVisible,
        modalOptions,
    };
};

export default useModalActions;