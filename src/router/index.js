import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { GetStarted, Splash, Register, UploadPhoto1 } from '../pages'

const Stack = createStackNavigator()


const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
            <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown: false}} />
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
            <Stack.Screen name="UploadPhoto1" component={UploadPhoto1} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default Router