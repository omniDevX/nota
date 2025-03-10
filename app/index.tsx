import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';
import { Swipeable } from 'react-native-gesture-handler';

import styles from '@/config/styles';

export default function HomeScreen(): JSX.Element {
    const [noteText, setNoteText] = useState<string>('');
    const [notes, setNotes] = useState<string[]>([]);
    const [listKey, setListKey] = useState<number>(0);
    const swipeableRefs = useRef<Map<number, Swipeable>>(new Map());

    // Load saved notes and real-time note on app start
    useEffect(() => {
        loadNotes();
        loadRealTimeNote();
    }, []);

    // Load saved notes list
    const loadNotes = async (): Promise<void> => {
        const storedNotes = await AsyncStorage.getItem('notes');
        if (storedNotes) {
            setNotes(JSON.parse(storedNotes));
        }
    };

    // Load real-time note from storage
    const loadRealTimeNote = async (): Promise<void> => {
        const realTimeNote = await AsyncStorage.getItem('realTimeNote');
        if (realTimeNote) {
            setNoteText(realTimeNote);
        }
    };

    // Save real-time note as the user types
    const handleInputChange = async (text: string): Promise<void> => {
        setNoteText(text);
        await AsyncStorage.setItem('realTimeNote', text); // Save to AsyncStorage
    };

    // Save note to the list (same as before)
    const saveNote = async (): Promise<void> => {
        if (!noteText.trim()) return;

        const timestamp = dayjs().format('MMM D  h:mma');
        const newNote = `${timestamp}\n${noteText.trim()}`;
        const updatedNotes = [newNote, ...notes];
        setNotes(updatedNotes);
        await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
        setNoteText(''); // Clear the input
        await AsyncStorage.removeItem('realTimeNote'); // Clear the real-time note
    };

    // Delete note from the list
    const deleteNote = async (index: number): Promise<void> => {
        swipeableRefs.current.get(index)?.close();
        await new Promise((resolve) => setTimeout(resolve, 100));
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
        await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
        setListKey((prevKey) => prevKey + 1);
    };

    // Render each note item
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
                        swipeableRefs.current.set(index, ref);
                    } else {
                        swipeableRefs.current.delete(index);
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
                key={listKey}
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
                    onChangeText={handleInputChange} // Save in real-time as the user types
                    placeholder="Type your note here. Swipe to delete."
                    maxLength={300} // Optional: Set a character limit
                    numberOfLines={3} // Restrict visible lines to 3
                    blurOnSubmit={true} // Prevent new lines on "Enter"
                />
                <TouchableOpacity style={styles.button} onPress={saveNote}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}