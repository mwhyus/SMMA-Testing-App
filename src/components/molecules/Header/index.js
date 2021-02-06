import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ICback } from '../../../assets'

const index = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <ICback />
            </TouchableOpacity>
            <Text style={styles.text}>Upload Photo</Text>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        color: 'black'
    }
})
