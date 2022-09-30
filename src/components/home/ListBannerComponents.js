import React from 'react'
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import { SIZES, textSize } from '../../themes/themes';
import { viderPlay } from '../../themes/icon';

export default function ListBannerComponents({ item }) {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('Movie Detail Screen', { movies: item });
    }
    return (
        <TouchableOpacity
            key={item.id}
            style={styles.cardStyles}
            onPress={onPress}
        >
            {/* Back Card */}
            <View>
                <Image
                    source={{ uri: item.backImage }}
                    style={styles.backImageStyle}
                    resizeMode="cover"
                />
                <Image source={viderPlay} style={styles.videoPlayImageStyle} />
            </View>
            {/* Font Card */}
            <View style={styles.movieCardInfoStyle}>
                <Image
                    source={{ uri: item.fontImage }}
                    style={styles.fontImageStyle}
                />
                <Text numberOfLines={1} style={styles.textStyle}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardStyles: {
        width: SIZES.width,
        height: SIZES.height / 2.5,
    },
    backImageStyle: {
        width: SIZES.width,
        height: 200
    },
    movieCardInfoStyle: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        left: SIZES.margin1
    },
    fontImageStyle: {
        width: 100,
        height: 150,
        overflow: 'visible',
        borderWidth: 1,
    },
    textStyle: {
        fontSize: textSize.XL,
        alignSelf: 'flex-end'
    },
    videoPlayImageStyle: {
        height: 50,
        width: 50,
        position: 'absolute',
        top: 100,
        left: SIZES.width / 2.2
    }
})