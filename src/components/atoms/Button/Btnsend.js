import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ICsendblack, ICsendwhite } from '../../../assets'

const Btnicon = ({disable}) => {
    return (
        <View style={styles.container(disable)}>
            {disable && <ICsendblack />}
            {!disable && <ICsendwhite />}
        </View>
    )
}

export default Btnicon

const styles = StyleSheet.create({
    container: (disable) => (
        {
            backgroundColor: disable ? '#95a5a6' : '#2980b9',
            width: 45,
            height: 45,
            borderRadius: 10,
            paddingTop: 3,
            paddingRight: 3,
            paddingBottom: 8,
            paddingLeft: 8
        }
    ),
})
