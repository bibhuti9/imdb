import react, { useState, useEffect } from 'react'
import { FlatList, Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';

import ListBannerComponents from './ListBannerComponents';

import { rightArrow } from '../../themes/icon';
import { fetchData } from '../../common/fetchData'
import { commonStyle, SIZES, textSize } from '../../themes/themes';

export default function bannerComponent() {
    const [banner, setBanner] = useState([]);
    // Fetch Banners
    useEffect(() => {
        setBanner(fetchData("Banner"));
    }, []);
    return (
        <View style={{ flex: 1, }}>
            <FlatList
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                data={banner}
                keyExtractor={(item) => { return item.id }}
                renderItem={({ item }) => <ListBannerComponents item={item} />}
            />
            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Browse Trailers And Videos</Text>
                <Image source={rightArrow} style={commonStyle.iconStyle} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonStyle: {
        margin: SIZES.margin1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textStyle: {
        fontSize: textSize.S
    }
})