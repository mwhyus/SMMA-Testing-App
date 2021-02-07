import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ICpesan, ICprofil } from '../../../assets'



const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
        if (title === 'Messages'){
            return <ICpesan />
        }

        if (title === 'Profile'){
            return <ICprofil />
        }
        return <ICpesan />
    }
    

    
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: (active) => (
        {
            fontSize: 16,
            color: active ? "#bdc3c7" : "black",
            fontWeight: '900',
            marginTop: 4
        }
    )
})
