import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SIZES, COLORS, textSize } from '../../themes/themes';
import { fetchData } from '../../common/fetchData';
import { useNavigation } from '@react-navigation/native';

export default function FeaturesComponents() {
    const [featured, setFeatured] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        setFeatured(fetchData("Featured"));
    }, []);

    const onPress = (movies) => {
        navigation.navigate('Movie Detail Screen', { movies });
    }

    const RenderItem = ({ movies, index }) => {
        return (
            <TouchableOpacity style={styles.buttonStyle} key={index} onPress={() => onPress(movies)}>
                <Image source={{ uri: movies.backImage }} style={styles.imagesStyle} />
                <Text numberOfLines={2} style={styles.textStyle}>{movies.tag}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.labelStyle}>Featured today</Text>
            <View style={styles.listCardStyle}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        featured.map((movies, index) => {
                            return (
                                <RenderItem key={index} movies={movies} index={index} />
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
        width: SIZES.width / 1.5,
    },
    buttonStyle: {
        margin: SIZES.margin1
    },
    textStyle: {
        position: 'absolute',
        bottom: 10,
        color: COLORS.white,
        fontSize: textSize.M
    }
})