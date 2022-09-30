import { View, ScrollView, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

import { COLORS, SIZES, textSize } from '../../themes/themes';
import { fetchData } from '../../common/fetchData';
import { useNavigation } from '@react-navigation/native';

export default function LatestComponents() {
    const [latestMovies, setLatestMovies] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        setLatestMovies(fetchData("Latest"));
    }, []);

    const onPress = (movies) => {
        navigation.navigate('Movie Detail Screen', { movies });
    }
    return (
        <View style={styles.container}>
            <Text style={styles.labelStyle}>Latest Movies</Text>
            <View style={styles.listCardStyle}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        latestMovies.map((movies, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => onPress(movies)}>
                                    <Image key={index} source={{ uri: movies.fontImage }} style={styles.imagesStyle} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: SIZES.margin1,
    },
    labelStyle: {
        fontSize: textSize.M,
        fontWeight: 'bold',
        color: COLORS.primary
    },
    listCardStyle: {
        flexDirection: 'row'
    },
    imagesStyle: {
        height: SIZES.height / 3,
        width: SIZES.width / 2.5,
        margin: SIZES.margin1,
    }
})