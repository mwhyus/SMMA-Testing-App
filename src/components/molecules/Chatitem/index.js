import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Chatitem = () => {
    return (
        <View>
            <Text style={styles.chatDate}>Monday, 17 February 2020</Text>
            <View style={styles.container}>
                <View style={styles.ChatContent}>
                    <Text style={styles.text}>Hello, Good morning, im looking for someone to help me this weekend. Are you free on this weekend?</Text>
                </View>
                <Text style={styles.date}>4.20 AM</Text>
            </View>
        </View>
    )
}

export default Chatitem

const styles = StyleSheet.create({
    container: { alignItems: 'flex-end' },
    ChatContent: {
        padding: 12,
        paddingRight: 18,
        backgroundColor: '#0984e3',
        maxWidth: "75%",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        marginRight: 10
    },
    text: {
        fontSize: 14,
        color: 'white'
    },
    date: {
        fontSize: 11,
        marginTop: 8
    },
    chatDate: {
        fontSize: 11,
        color: '#636e72',
        textAlign: 'center',
        marginBottom: 10
    },
})
