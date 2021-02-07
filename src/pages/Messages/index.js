import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListPerson, ListPerson2 } from '../../components'

const Messages = () => {
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Text style={styles.title}>Messages</Text>
                <ListPerson />
                <ListPerson2 />
            </View>
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#3498db",
        flex: 1,
    },
    content: {
        backgroundColor: '#ecf0f1',
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    title: {
        fontSize: 25,
        fontWeight: '900',
        marginTop: 30,
        marginLeft: 16
    }
})
