import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const InputPassword = ({label}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput secureTextEntry={true} style={styles.input} />
        </View>
    )
}

export default InputPassword

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
    },
    label: {
        fontSize: 16,
        color: 'black',
        marginBottom: 6
    }
})
