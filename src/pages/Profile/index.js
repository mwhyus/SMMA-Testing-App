import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Profile = () => {
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Text>This is profile</Text>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#3498db",
        flex: 1,
    },
    content: {
        backgroundColor: '#ecf0f1',
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
})
