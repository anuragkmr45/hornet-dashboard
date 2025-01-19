import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const monitoredWallets = [
  { id: '1', name: 'John’s Wallet', balance: '0.8 BTC' },
  { id: '2', name: 'Family Wallet', balance: '1.2 ETH' },
  { id: '3', name: 'Partner Wallet', balance: '1.0 BTC' },
];

const ManagedWallet = () => {
  const navigation = useNavigation();

  const handleWalletPress = (wallet: any) => {
    // navigation.navigate('WalletDetails', { wallet });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={monitoredWallets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.walletItem} onPress={() => handleWalletPress(item)}>
            <Text style={styles.walletName}>{item.name}</Text>
            <Text style={styles.walletBalance}>{item.balance}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  walletItem: { padding: 16, marginBottom: 12, backgroundColor: '#f0f0f0', borderRadius: 8 },
  walletName: { fontSize: 16, fontWeight: 'bold' },
  walletBalance: { fontSize: 14, color: 'gray' },
});

export default ManagedWallet;
