import React, { useState } from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import { ManagedWallettyles } from '../styles/ManagedWalletStyles';

interface Transaction {
  id: string;
  amount: string;
  date: string;
  status: string;
}

interface ExpandedContentProps {
  item: {
    id: string;
    walletAddress: string;
    recentTransactions: Transaction[];
  };
  expandedWalletId: string | null;
  animationValues: { [key: string]: Animated.Value };
}

const ExpandedContent: React.FC<ExpandedContentProps> = ({ item, expandedWalletId, animationValues }) => {
  const styles = ManagedWallettyles;

  if (!expandedWalletId || expandedWalletId !== item.id) return null;

  return (
    <Animated.View style={[styles.expandedContent, { height: animationValues[item.id] }]}>
      <View style={styles.walletAddressContainer}>
        <Text style={styles.walletAddressTitle}>Wallet Address:</Text>
        <TouchableOpacity>
          <Text style={styles.walletAddressText}>{item.walletAddress}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.recentTransactionsTitle}>Recent Transactions</Text>
      {item.recentTransactions.map((tx) => (
        <View key={tx.id} style={styles.transactionRow}>
          <Text style={[styles.transactionAmount, { color: tx.amount.startsWith('+') ? '#4CAF50' : '#FF5252' }]}>
            {tx.amount}
          </Text>
          <Text style={styles.transactionDate}>{tx.date}</Text>
          <View style={[styles.transactionStatusBadge, { backgroundColor: tx.status === 'Completed' ? '#4CAF50' : '#FF9800' }]}>
            <Text style={styles.transactionStatusText}>{tx.status}</Text>
          </View>
        </View>
      ))}
    </Animated.View>
  );
};

export default ExpandedContent;
