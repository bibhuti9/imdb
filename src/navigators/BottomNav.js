import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack'
import SearchScreen from '../screens/SearchScreen'

import { COLORS } from '../themes/themes';

const BottomTab = createBottomTabNavigator();
export default function BottomNav() {
    const tabOptions = (lableName, iconName) => {
        return {
            tabBarLabel: lableName,
            tabBarIcon: ({ color, size }) => (
                <Icon name={iconName} color={color} size={size} />
            ),
        }
    }
    return (
        <NavigationContainer>
            <BottomTab.Navigator screenOptions={{
                tabBarActiveTintColor: COLORS.primary,
                headerShown: false,
            }}>
                <BottomTab.Screen
                    name='Home Stack'
                    component={HomeStack}
                    options={tabOptions("Home", "home")}
                />
                <BottomTab.Screen
                    name='Search Screen'
                    component={SearchScreen}
                    options={tabOptions("Search", "search")}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}