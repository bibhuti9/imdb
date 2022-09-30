import { ScrollView, View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native'
import React from 'react'

import { SIZES, textSize } from '../../themes/themes'
import { useNavigation } from '@react-navigation/native'

export default function SearchResultComponents({ response }) {
    const navigation = useNavigation();
    const RenderValue = ({ value }) => {
        console.log(value)
        return (
            <TouchableOpacity
                style={styles.cardStyle}
                onPress={() => navigation.navigate('Movie Detail Screen', { movies: value })}>
                <Image resizeMode="contain" source={{ uri: value.fontImage }} style={styles.imageStyle} />
                <Text style={styles.textStyle}>{value.name}</Text>
            </TouchableOpacity>
        )
    }
    const NoResponse = () => {
        return (
            <View style={styles.noResponseContainer}>
                <Text>Sorry No Movie Found</Text>
            </View>
        )
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                {
                    response.length == 0 ? <NoResponse /> : (
                        response.map((value, index) => {
                            return <RenderValue value={value} key={index} />
                        })
                    )
                }
            </View>
        </ScrollView >
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    cardStyle: {
        width: SIZES.width / 2,
        marginVertical: SIZES.margin1
    },
    imageStyle: {
        height: 200,
        width: SIZES.width / 2
    },
    noResponseContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: textSize.M
    }
})