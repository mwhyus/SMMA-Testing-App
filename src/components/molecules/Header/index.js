import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ICback } from '../../../assets'

const Header = ({title, type, onPress}) => {
    return (
        <View style={styles.container(type)}>
            <TouchableOpacity onPress={onPress}>
                <ICback />
            </TouchableOpacity>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: (type) => (
        {
            paddingHorizontal: 16,
            paddingVertical: 20,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: type == 'light' ? '#3498db' : '#ecf0f1',
            borderBottomLeftRadius: type == 'light' ? 10 : 0,
            borderBottomRightRadius: type == 'light' ? 10 : 0,
        }
    ),
    text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        color: 'black'
    }
})
