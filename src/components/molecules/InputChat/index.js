import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Button } from '../../atoms'

const InputChat = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.txtInput} placeholder="Type here" />
            <Button type="btn-icon" />
        </View>
    )
}

export default InputChat

const styles = StyleSheet.create({
    txtInput: {
        backgroundColor: '#95a5a6',
        padding: 14,
        borderRadius: 10,
        flex: 1,
        marginRight: 20,
        fontSize: 14,
        maxHeight: 45
    },
    container: {
        padding: 16,
        flexDirection: 'row',
    }
})
