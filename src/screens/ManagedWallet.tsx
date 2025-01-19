import React, { useState } from 'react';
import { View, FlatList, SafeAreaView, Animated } from 'react-native';
import { monitoredWallets } from '../.data/mockWallets';
import { ManagedWallettyles } from '../styles/ManagedWalletStyles';
import CardItem from '../components/ManagedWalletCard';
import ExpandedContent from '../components/ExpandedContent';

const ManagedWallets: React.FC = () => {
  const styles = ManagedWallettyles;
  const [expandedWalletId, setExpandedWalletId] = useState<string | null>(null);
  const [animationValues, setAnimationValues] = useState<{ [key: string]: Animated.Value }>({});

  const toggleExpand = (walletId: string) => {
    setExpandedWalletId(walletId === expandedWalletId ? null : walletId);

    if (!animationValues[walletId]) {
      setAnimationValues((prev) => ({
        ...prev,
        [walletId]: new Animated.Value(0),
      }));
    }

    const currentValue = animationValues[walletId] || new Animated.Value(0);
    Animated.timing(currentValue, {
      toValue: walletId === expandedWalletId ? 0 : 200,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={monitoredWallets}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <CardItem item={item} expandedWalletId={expandedWalletId} toggleExpand={toggleExpand} />
              <ExpandedContent item={item} expandedWalletId={expandedWalletId} animationValues={animationValues} />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ManagedWallets;
