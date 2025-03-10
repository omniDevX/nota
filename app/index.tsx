// app/index.tsx - Home screen with notes list and input
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';

import styles from '@/config/styles';

export default function HomeScreen(): JSX.Element {
    const [noteText, setNoteText] = useState<string>('');
    const [notes, setNotes] = useState<string[]>([]);

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

    const renderNote = ({ item }: { item: string }) => {
        const [timestamp, ...rest] = item.split('\n');
        const content = rest.join('\n').trim();

        return (
            <View style={styles.noteCard}>
                <Text style={styles.noteTimestamp}>{timestamp}</Text>
                <Text style={styles.noteContent}>{content}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
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