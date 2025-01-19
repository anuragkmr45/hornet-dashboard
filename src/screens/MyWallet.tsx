// import React from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
// import { myWallets } from '../.data/mockWallets';

// const MyWalletScreen = () => {

//   return (
//     <MyWallet />
//   );
// };

// const MyWallet = () => {
//   const renderWallet = ({ item }: { item: typeof myWallets[0] }) => (
//     <TouchableOpacity style={styles.card}>
//       <Text style={styles.walletName}>{item.name}</Text>
//       <Text style={styles.walletBalance}>{item.balance}</Text>
//       <Text style={styles.walletAddress}>Address: {item.walletAddress}</Text>
//       <Text style={styles.recentTransactionsTitle}>Recent Transactions:</Text>
//       {item.recentTransactions.map((tx) => (
//         <Text key={tx.id} style={styles.transaction}>
//           {tx.date}: {tx.amount} ({tx.status})
//         </Text>
//       ))}
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={myWallets}
//         keyExtractor={(item) => item.id}
//         renderItem={renderWallet}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#FFFFFF',
//   },
//   card: {
//     padding: 16,
//     marginVertical: 8,
//     backgroundColor: '#F5F5F5',
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   walletName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   walletBalance: {
//     fontSize: 16,
//     marginVertical: 4,
//   },
//   walletAddress: {
//     fontSize: 14,
//     color: '#555',
//   },
//   recentTransactionsTitle: {
//     fontSize: 16,
//     marginTop: 8,
//     fontWeight: '600',
//   },
//   transaction: {
//     fontSize: 14,
//     color: '#333',
//   },
// });

// export default MyWalletScreen;

import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const wallets = [
  { id: '1', name: 'Main Wallet', balance: '1.25 BTC' },
  { id: '2', name: 'Savings Wallet', balance: '2.7 ETH' },
  { id: '3', name: 'Travel Wallet', balance: '0.9 LTC' },
];

const MyWallet = () => {
  const navigation = useNavigation();

  const handleWalletPress = (wallet: any) => {
    // navigation.navigate('WalletDetails', { wallet });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={wallets}
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

export default MyWallet;
