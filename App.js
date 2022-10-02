import React, { useState, useEffect } from 'react'

import BottomNav from './src/navigators/BottomNav';
import SplashScreen from 'react-native-splash-screen'

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return <BottomNav />
}