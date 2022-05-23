import React, {useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

interface TodoListProps {
    name: string
    done: boolean
}

export function TodoList() {
    const [item, setItem] = useState('')
    const [list, setList] = useState<TodoListProps[]>([])

    function handleRemoveItem(id: string) {
        setList(list.filter((item, index) => {
            return String(index) !== id && item
        }))
    }

    function handleAddItem() {
        setList(old => [...old, {
            name: item,
            done: false
        }])
        setItem('')
    }

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Todo
                </Text>
                <View style={styles.containerInput}>
                    <TextInput
                        onChangeText={setItem}
                        placeholder={'Digite a tarefa'}
                        style={styles.input}
                        value={item}
                        onSubmitEditing={handleAddItem}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleAddItem}>
                        <Text style={styles.textInput}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={list}
                contentContainerStyle={{paddingVertical: 20}}
                renderItem={({item, index}) => {
                    return (
                        <TouchableOpacity
                            key={String(index)}
                            style={styles.wrapper}
                            onPress={() => handleRemoveItem(String(index))}
                        >
                            <Text style={styles.wrapperText}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item, index) => String(index)}
            />
        </View>
    );

}
