import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Chatitem, Header, InputChat } from '../../components'

const Chatting = ({ navigation }) => {
    return (

            <View style-={styles.page}>
                <Header type='light' title="Armin Artelt" onPress={() => navigation.goBack()} />
                <View style={styles.content}>
                    <Chatitem />
                </View>
                <View style={{ height: '20%' }}>
                    <InputChat />
                </View>
            </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    content: {
        justifyContent: 'space-between',
        height: '75%',
    },
    page: {
        flex: 1,

    }
})
