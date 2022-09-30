import React, { useState } from 'react'
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'

import ListStar from '../components/common/ListStar';
import { SIZES, textSize } from '../themes/themes';

export default function MovieDetailScreen({ route }) {
    const [movies, setMovies] = useState(route.params.movies);
    return (
        <ScrollView>
            <View style={{ flex: 1, }}>
                {/* image card*/}
                <View>
                    <Image source={{ uri: movies.backImage }} style={styles.backImageStyle} />
                    <View style={styles.imageInfoCard}>
                        <View style={styles.fontImageContainer}>
                            <Image
                                source={{ uri: movies.fontImage }}
                                style={styles.fontImageStyle}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={styles.headerInfoContainer}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text>{movies.name} ( {movies.ratting} )</Text>
                            </View>
                            <ListStar count={parseInt(movies.ratting)} />
                        </View>
                    </View>
                </View>
                {/* movies details */}
                <View style={{ flex: 1, margin: SIZES.margin1 }}>
                    {/* year length director */}
                    <View style={styles.yldStyle}>
                        <Text style={styles.textStyle}>{movies.year}</Text><Text>|</Text>
                        <Text style={styles.textStyle}>{movies.length}</Text><Text>|</Text>
                        <Text style={styles.textStyle}>{movies.director}</Text>
                    </View>
                    {/*cast */}
                    <View style={{ margin: SIZES.margin1 }}>
                        <Text style={styles.textStyle}>Cast : {movies.cast}</Text>
                    </View>
                    {/* Movie Desc */}
                    <View style={{ margin: SIZES.margin1 }}>
                        <Text style={styles.textStyle}>Movie Description : {movies.movieDesc}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    backImageStyle: {
        width: SIZES.width,
        height: SIZES.height / 3,
    },
    imageInfoCard: {
        flexDirection: 'row',
        height: SIZES.height / 7
    },
    fontImageContainer: {
        width: 150,
        height: 150,
    },
    fontImageStyle: {
        width: 150,
        height: 150,
        position: 'absolute',
        top: -80
    },
    headerInfoContainer: {
        height: 50
    },
    yldStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: SIZES.margin1
    },
    textStyle: {
        fontSize: textSize.M
    }
})