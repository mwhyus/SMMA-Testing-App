import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { ICaddphoto, ILnulluser } from '../../assets'
import { Button } from '../../components'
import { Header } from '../../components/molecules'

const UploadPhoto1 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header title="Upload Photo" onPress={() => navigation.goBack()} />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <View style={styles.border}>
                        <Image source={ILnulluser} style={styles.nullphoto} />
                        <TouchableOpacity style={styles.addphoto}>
                            <ICaddphoto />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.name}>Erwin Smith</Text>
                    <Text style={styles.id}>ID Number</Text>
                </View>
                <View>
                    <Button title="Upload and Continue" onPress={() => navigation.replace('MainApp')} />
                </View>
            </View>
        </View>
    )
}

export default UploadPhoto1

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        paddingHorizontal: 40,
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 64,
    },

    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    nullphoto: {
        height: 110,
        width: 110
    },
    border: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: '#2980b9',
        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addphoto: {
        position: 'absolute',
        bottom: 10,
        right: 3
    },
    name: {
        fontSize: 24,
        textAlign: 'center'
    },
    id: {
        fontSize: 18,
        textAlign: 'center',
        color: 'grey'
    }
})
