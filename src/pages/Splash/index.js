import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Splash = ({navigation}) => {
    useEffect(() =>{
        setTimeout(() => {
            navigation.replace('GetStarted')
        }, 2000)
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello World!</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: '900'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ecf0f1'
    }
})
