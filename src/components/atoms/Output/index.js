import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Output = ({ type, title }) => {
    return (
        <View>
            <Text style={styles.text}>{title}</Text>
            <View style={styles.container}>
                <Text>{type}</Text>
            </View>
        </View>
    )
}

export default Output

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        maxWidth: 300,
        marginTop: 10,
        marginLeft: 40
    },
    text: {
        paddingLeft: 40, 
        marginTop: 10
    }
})
