import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ILnulluser } from '../../assets'
import { Button, Output } from '../../components'

const Profile = ({navigation}) => {
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <View style={{ alignItems: 'center' ,paddingTop: 20 }}>
                    <View style={styles.border}>
                        <Image source={ILnulluser} style={styles.nullphoto} />
                    </View>
                    <View style={styles.smallcontainer}>
                        <Text style={styles.text}>Reiner Braun</Text>
                    </View>
                </View>
                <View>
                    <Output type="reinerbraun@gmail.com" title="Email"/>
                    <Output type="9988356327" title="ID Number"/>
                    <Output type="JL. Liberio" title="Address" />
                    <Output type="+62811989992" title="Mobile number" />
                </View>
                <View style={{padding: 40}}>
                    <Button title="Sign Out" onPress={() => navigation.replace('GetStarted')} />
                </View>

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
        justifyContent: 'space-between'
    },
    nullphoto: {
        height: 80,
        width: 80,
    },

    border: {
        width: 95,
        height: 95,
        borderWidth: 1,
        borderColor: '#2980b9',
        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 23
    },
    smallcontainer: {
        marginTop: 10,
    },
    text: {
        fontSize: 20,
        marginLeft: 16
    }
})
