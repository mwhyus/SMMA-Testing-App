import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Input } from '../../components'

const Login = ({navigation}) => {
    return (
        <View style={styles.page}>
                <Text style={styles.title}>Login Your Account Here</Text>
                <Input label="Email Address" />
                <View style={{ height: 10 }} />
                <Input label="Password" />
                <View style={{ height: 200 }} />
                <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
                <View style={styles.container}>
                    <Text>Dont have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text>Sign Up</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    page: {
        padding: 40,
        backgroundColor: "white",
        flex: 1
    },
    title: {
        fontSize: 20,
        color: '#112340',
        marginTop: 40,
        textAlign: 'center',
        marginBottom: 150
    },
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 8
    }

})
