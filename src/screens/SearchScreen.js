import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import SearchResultComponents from '../components/Search/SearchResultComponents'

import { COLORS, SIZES, textSize } from '../themes/themes'
import { searchMovie } from '../common/fetchData'

export default function SearchScreen() {
    const [searchValue, setSearchValue] = useState("");
    const [response, setResponse] = useState([]);
    useEffect(() => {
        setResponse(searchMovie(searchValue));
    }, [searchValue])
    return (
        <View>
            {/* Text Input */}
            <View style={styles.textInputContainer}>
                <Icon name='search' style={styles.iconStyle} />
                <TextInput
                    placeholder='Enter Movie Name'
                    style={styles.textInputStyle}
                    onChangeText={(val) => setSearchValue(val)}
                />
            </View>
            <SearchResultComponents response={response} />
        </View>
    )
}
const styles = StyleSheet.create({
    textInputContainer: {
        flexDirection: 'row',
        margin: SIZES.margin1,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.radious,
        elevation: 5
    },
    iconStyle: {
        fontSize: textSize.L,
        alignSelf: 'center',
        marginHorizontal: SIZES.margin1
    },
    textInputStyle: {
        flex: 1,
        padding: SIZES.padding1
    }
})