import 'react-native-gesture-handler'

import AppNavigation from './src/navigations/AppNavigation';
import AppSplashScreen from './src/screens/AppSplashScreen';
import { useState } from 'react';

const App = () => {

  const [showSplash, setShowSplash] = useState(true);
  
  if (showSplash) {
    return <AppSplashScreen onFinish={() => setShowSplash(false)} />;
}

  return (
    <AppNavigation />
  )
}

export default App