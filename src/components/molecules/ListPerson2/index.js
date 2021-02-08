import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ILperson2 } from '../../../assets'

const ListPerson2 = () => {
    return (
        <View style={styles.container}>
            <Image source={ILperson2} style={styles.person} />
            <View />
            <View style={styles.divider}>
                <Text style={styles.name}>Berthold Hoover</Text>
                <Text style={styles.chat}>Where are you now?</Text>
            </View>
        </View>
    )
}

export default ListPerson2

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
    },
    person: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        marginRight: 12
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        width: 290
    },
    name: {
        fontSize: 18
    },
    chat: {
        fontSize: 14,
        fontWeight: '300'
    }
})
