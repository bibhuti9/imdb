import React, { useState, useEffect } from 'react'

import SplashScreen from './src/screens/SplashScreen'
import BottomNav from './src/navigators/BottomNav';

export default function App() {
  const [splashScreen, setSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 2000);
  }, [])

  return splashScreen ? <SplashScreen /> : <BottomNav />
}