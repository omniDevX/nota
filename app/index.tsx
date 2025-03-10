import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';
import { Swipeable } from 'react-native-gesture-handler';

import styles from '@/config/styles';

export default function HomeScreen(): JSX.Element {
    const [noteText, setNoteText] = useState<string>('');
    const [notes, setNotes] = useState<string[]>([]);
    const [listKey, setListKey] = useState<number>(0); // Add a key for FlatList
    const swipeableRefs = useRef<Map<number, Swipeable>>(new Map());

    useEffect(() => {
        loadNotes();
    }, []);

    const loadNotes = async (): Promise<void> => {
        const storedNotes = await AsyncStorage.getItem('notes');
        if (storedNotes) {
            setNotes(JSON.parse(storedNotes));
        }
    };

    const saveNote = async (): Promise<void> => {
        if (!noteText.trim()) return;
        const timestamp = dayjs().format('MMM D  h:mma');
        const newNote = `${timestamp}\n ${noteText.trim()}`;
        const updatedNotes = [newNote, ...notes];
        setNotes(updatedNotes);
        await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
        setNoteText('');
    };

    const deleteNote = async (index: number): Promise<void> => {
        // Close the Swipeable immediately
        swipeableRefs.current.get(index)?.close();

        // Wait for the swipeable to close (optional, but ensures smooth animation)
        await new Promise((resolve) => setTimeout(resolve, 100));

        // Update the list state
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
        await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));

        // Force FlatList to re-render by updating the key
        setListKey((prevKey) => prevKey + 1);
    };

    const renderNote = ({ item, index }: { item: string; index: number }) => {
        const [timestamp, ...rest] = item.split('\n');
        const content = rest.join('\n').trim();

        const renderRightActions = () => {
            return (
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => deleteNote(index)}
                >
                    <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
            );
        };

        return (
            <Swipeable
                ref={(ref) => {
                    if (ref) {
                        swipeableRefs.current.set(index, ref); // Store the Swipeable ref
                    } else {
                        swipeableRefs.current.delete(index); // Remove the ref if Swipeable is unmounted
                    }
                }}
                renderRightActions={renderRightActions}
            >
                <View style={styles.noteCard}>
                    <Text style={styles.noteTimestamp}>{timestamp}</Text>
                    <Text style={styles.noteContent}>{content}</Text>
                </View>
            </Swipeable>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                key={listKey} // Force re-render by changing the key
                data={notes}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderNote}
                contentContainerStyle={{ paddingBottom: 100 }}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    multiline
                    value={noteText}
                    onChangeText={setNoteText}
                    placeholder="Type your note here..."
                />
                <TouchableOpacity style={styles.button} onPress={saveNote}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}