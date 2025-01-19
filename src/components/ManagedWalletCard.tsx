// CardItem.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ManagedWallettyles } from '../styles/ManagedWalletStyles';

interface CardItemProps {
  item: any;
  expandedWalletId: string | null;
  toggleExpand: (walletId: string) => void;
}

const CardItem: React.FC<CardItemProps> = ({ item, expandedWalletId, toggleExpand }) => {
  const styles = ManagedWallettyles;
  
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => toggleExpand(item.id)}>
      <View style={styles.cardHeader}>
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>{item.name[0]}</Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.walletName}>{item.name}</Text>
          <Text style={styles.walletBalance}>{item.balance}</Text>
          <Text style={styles.walletPurpose}>{item.monitoringPurpose}</Text>
        </View>
      </View>

      {/* This part will be handled by the expanded content component */}
    </TouchableOpacity>
  );
};

export default CardItem;
