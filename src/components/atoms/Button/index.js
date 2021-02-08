import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Btnsend from './Btnsend'

const Button = ({ type, title, onPress, disable }) => {

    if (type == 'btn-icon'){
        return <Btnsend disable={disable}/>
    }
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>

    )
}

export default Button

const styles = StyleSheet.create({
    container: (type) => ({

        backgroundColor: type == "secondary" ? "white" : "#2980b9",
        paddingVertical: 10,
        borderRadius: 10

    }),
    text: (type) => ({
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        color: type == 'secondary' ? 'black' : 'white'
    })
})
