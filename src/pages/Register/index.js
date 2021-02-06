import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, Input, InputPassword } from '../../components'

const Register = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.text}>Register Here</Text>
                <Input label="Email Address" />
                <Input label="Name" />
                <Input label="ID Number" />
                <Input label="Number phone" />
                <Input label="Address" />
                <InputPassword label="Password" />
                <InputPassword label="Re-Password" />
                <View style={{ height: 20 }} />
                <Button title="Register" />
                <View style={{ height: 10 }} />
            </ScrollView>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        padding: 30,
        flex: 1
    },

    text: {
        fontSize: 24,
        fontWeight: '600',
        alignSelf: 'center',
        marginTop: 20,
    }
})
