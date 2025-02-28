import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, RefreshControl, Pressable, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import LinearGradient from 'react-native-linear-gradient';
// import { useNavigation } from '@react-navigation/native';
// import { RootStackParamList } from '../navigations/AppNavigation';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { myWallets } from '../.data/mockWallets';
import { MyWalletStyles } from '../styles/MyWalletStyles';
import MyWalletCard from '../components/MyWalletCard';

// type MyWalletsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MyWallets'>;

const MyWallets = () => {
  // const navigation = useNavigation<MyWalletsScreenNavigationProp>();
  const [refreshing, setRefreshing] = useState(false);
  const styles = MyWalletStyles;

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar animated={true} backgroundColor='white' translucent={true} />
      <View style={styles.container}>
        {/* Header */}
        {/* <LinearGradient colors={['#FFC107', '#FFA000']} style={styles.header}>
        <Text style={styles.headerTitle}>Welcome Back!</Text>
        <Text style={styles.headerSubtitle}>Manage Your Wallets</Text>
        <Image
          source={{ uri: '' }}
          style={styles.avatar}
        />
      </LinearGradient> */}

        <FlatList
          data={myWallets}
          keyExtractor={(item) => item.id}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          renderItem={({ item }) => (
            <MyWalletCard id={item.id} name={item.name} balance={item.balance} walletAddress={item.walletAddress} usage={item.usage} recentTransactions={item.recentTransactions} />
          )}
        />

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


export default MyWallets;
