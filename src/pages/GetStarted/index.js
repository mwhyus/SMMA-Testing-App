import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILbglogin } from '../../assets'
import { Button } from '../../components'

const GetStarted = ({navigation}) => {
    return (
        <ImageBackground source={ILbglogin} style={styles.container}>
            <View>  
                <Text style={styles.title1}>Hi, Welcome!</Text>
            </View>

            <View>
                <Button title='Get Started' onPress={() => navigation.navigate("Register")}/>
                <View style={{height: 16}} />
                <Button type='secondary' title='Sign In' onPress={() => navigation.navigate('Login')}/>
            </View>

        </ImageBackground>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    container: {
        padding: 40,
        justifyContent: 'space-between',
        flex: 1
    },
    title1: {
        fontSize: 38,
        fontWeight: '900',
        marginTop: 91,
        color: 'white',
        maxWidth: 200
    },
    title2: {
        fontSize: 28,
        fontWeight: '900',
        color: 'white'
    }

})
