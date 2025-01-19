import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import ManagedWallet from '../screens/ManagedWallet';
import MyWallet from '../screens/MyWallet';
import { DrawerStyles } from '../styles/DrawerStyle';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: any) => {

  const styles = DrawerStyles;

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContainer}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/honret_logo_name.webp')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.drawerItems}>
        <DrawerItemList
          {...props}
          itemStyle={({ focused }: { focused: boolean }) => [
            styles.drawerItem,
            focused && styles.activeDrawerItem,
          ]}
          labelStyle={({ focused }: { focused: boolean }) => [
            styles.drawerItemLabel,
            focused && styles.activeLabel,
          ]}
        />
      </View>

      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.bottomButton} onPress={() => console.log('Log Out')}>
          <Text style={styles.bottomButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="MyWallet" component={MyWallet} />
      <Drawer.Screen name="ManagedWallet" component={ManagedWallet} />
    </Drawer.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;
