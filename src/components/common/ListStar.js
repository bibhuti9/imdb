import { StyleSheet } from 'react-native'
import React from 'react'
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, textSize } from '../../themes/themes';

export default function ListStar({ count }) {
    return (
        <Stars
            default={count}
            count={5}
            half={true}
            starSize={50}
            fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
            emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
            halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]} />}
        />
    )
}
const styles = StyleSheet.create({
    myStarStyle: {
        color: COLORS.primary,
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        fontSize: textSize.L
    },
    myEmptyStarStyle: {
        color: 'white',
    }
})