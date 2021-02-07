import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ILperson1 } from '../../../assets'

const ListPerson = () => {
    return (
        <View style={styles.container}>
            <Image source={ILperson1} style={styles.person} />
            <View />
            <View style={styles.divider}>
                <Text style={styles.name}>Armin Artelt</Text>
                <Text style={styles.chat}>Hello, Good morning...</Text>
            </View>
        </View>
    )
}

export default ListPerson

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
