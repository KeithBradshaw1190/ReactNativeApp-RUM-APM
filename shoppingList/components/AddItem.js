import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({ addItem }) => {
    const [text, setText] = useState();
    const handleAddItem = () => {
        addItem(text)
        setText(null)
    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeTaskManager}
        >
            <TextInput style={styles.input} value={text} placeholder={"Add to the list"} placeholderTextColor={'black'}
                onChangeText={text => setText(text)} />
            <TouchableOpacity onPress={() =>
                handleAddItem()

            } >
                <View style={styles.addWrapper}>
                    <Text style={styles.addTask}><Icon name="plus" size={20} /></Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};


const styles = StyleSheet.create({
    writeTaskManager: {
        position: 'absolute',
        bottom: 40,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        color: 'red',
    },
    input: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        width: 250,
        borderColor: '#C0C0C0',
        borderRadius: 60,
        backgroundColor: '#FFF',
        color: 'black'
    }

});

export default AddItem;
