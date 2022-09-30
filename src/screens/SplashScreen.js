import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import { fav } from '../themes/icon'

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <Image source={fav} style={styles.imgaeStyle} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgaeStyle: {
        width: 40,
        height: 40
    }
})