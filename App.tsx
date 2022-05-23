import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TodoList} from "./src/components/TodoList";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Text style={styles.title}>
                Todo List
            </Text>
            <TodoList />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3c055f',
        alignItems: 'center',
        paddingVertical: 40,
    },
    title: {
        color: '#fff',
        marginBottom: 30,
        marginTop: 30
    }
});
