import React from 'react'
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import BannerComponent from '../components/home/BannerComponent';
import LatestComponents from '../components/home/LatestComponents'
import FeaturesComponents from '../components/home/FeaturesComponents'

import { COLORS } from '../themes/themes'
export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
                <BannerComponent />
                <LatestComponents />
                <FeaturesComponents />
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})