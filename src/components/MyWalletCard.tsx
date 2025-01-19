import { useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import { MyWalletStyles } from '../styles/MyWalletStyles';

type MyWalletCardProps = {
    name: string,
    balance: string,
    walletAddress: string,
    usage: number,
}

const MyWalletCard = ({ name, balance, walletAddress, usage }: MyWalletCardProps) => {

    const styles = useMemo(() => MyWalletStyles, []);

    return (
        <Pressable
            style={styles.cardContainer}
            onPress={() => console.log("")
            }>
            <View style={styles.iconContainer}>
                <Text style={styles.iconText}>{name[0]}</Text>
            </View>

            <View style={styles.cardContent}>
                <Text style={styles.walletName}>{name}</Text>
                <Text style={styles.walletBalance}>{balance}</Text>
                <Text style={styles.walletAddress}>{walletAddress}</Text>
                
                <View style={styles.progressBarBackground}>
                    <View style={[styles.progressBar, { width: `${usage}%` }]} />
                </View>
            </View>
        </Pressable>
    )
}

export default MyWalletCard