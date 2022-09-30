import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen'
import MovieDetailScreen from '../screens/MovieDetailScreen'

const Tab = createStackNavigator();
export default function HomeStack() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name='Home Screen' component={HomeScreen} />
            <Tab.Screen name='Movie Detail Screen' component={MovieDetailScreen} />
        </Tab.Navigator>
    )
}