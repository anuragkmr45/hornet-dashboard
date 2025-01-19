import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ManagedWallet from '../screens/ManagedWallet';
import MyWallet from '../screens/MyWallet';
import AppSplashScreen from '../screens/AppSplashScreen';
import WalletDetails from '../screens/WalletDetails';

const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();

// const StackNavigation = () => {
//   return (
//       <Stack.Navigator>
//         <Stack.Screen name="AppSplash" component={AppSplashScreen} />
//         <Stack.Screen name="WalletDetails" component={WalletDetails} />
//       </Stack.Navigator>
//   )
// }

const DrawerNavigation = () => {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="MyWallet" component={MyWallet} />
        <Drawer.Screen name="ManagedWallet" component={ManagedWallet} />
      </Drawer.Navigator>
  )
}

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
      {/* <StackNavigation /> */}
    </NavigationContainer>
  )
}

export default AppNavigation