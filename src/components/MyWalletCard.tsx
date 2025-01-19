import { useMemo, useState } from 'react';
import { View, Text, Pressable, Modal, Alert, StyleSheet, Dimensions, TouchableOpacity, StatusBar } from 'react-native';
import { MyWalletStyles } from '../styles/MyWalletStyles';
import { ManagedWallettyles } from '../styles/ManagedWalletStyles';
import { monitoredWallets } from '../.data/mockWallets';

type MyWalletCardProps = {
    id: string,
    name: string,
    balance: string,
    walletAddress: string,
    usage: number,
    recentTransactions: {
        id: string,
        date: string,
        amount: string,
        status: string,
    }[],
}

const { width } = Dimensions.get("screen")

const MyWalletCard = ({ id, name, balance, walletAddress, usage, recentTransactions }: MyWalletCardProps) => {

    const styles = useMemo(() => MyWalletStyles, []);
    const stylee = useMemo(() => ManagedWallettyles, []);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMsg, setModalMsg] = useState('');

    const handleAddToManage = () => {
        // Check if wallet already exists in `myWallets`
        const walletExists = monitoredWallets.some((wallet) => wallet.id === id);

        if (!walletExists) {
            monitoredWallets.push({
                id,
                name,
                balance,
                walletAddress,
                usage,
                recentTransactions,
                monitoringPurpose: ''
            });
            Alert.alert('Success', `${name} has been added to Manage!`);
            setModalMsg(`${name} has been added to Manage!`)
            setModalVisible(false)
        } else {
            Alert.alert('Info', `${name} is already in Manage.`);
            setModalMsg(`${name} is already in Manage`)
            setModalVisible(false)
        }
    };

    return (
        <>
            {/* <StatusBar animated={true} backgroundColor='#FFC107' translucent={true} /> */}
            <Pressable
                style={styles.cardContainer}
                onPress={() => setModalVisible(true)}
            >
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

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={style.centeredView}>
                    <View style={style.modalView}>
                        <View style={stylee.cardHeader}>
                            <View style={styles.iconContainer}>
                                <Text style={styles.iconText}>{name[0]}</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={stylee.walletName}>{name}</Text>
                                <Text style={stylee.walletBalance}>{balance}</Text>
                                {/* <Text style={style.walletPurpose}>{monitoringPurpose}</Text> */}
                            </View>
                        </View>
                        <View style={stylee.walletAddressContainer}>
                            <Text style={stylee.walletAddressTitle}>Wallet Address:</Text>
                            <TouchableOpacity>
                                <Text style={stylee.walletAddressText}>{walletAddress}</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={stylee.recentTransactionsTitle}>Recent Transactions</Text>
                        {recentTransactions.length !== 0 && recentTransactions?.map((tx) => (
                            <View key={tx.id} style={stylee.transactionRow}>
                                <Text style={[stylee.transactionAmount, { color: tx.amount.startsWith('+') ? '#4CAF50' : '#FF5252' }]}>
                                    {tx.amount}
                                </Text>
                                <Text style={stylee.transactionDate}>{tx.date}</Text>
                                <View style={[stylee.transactionStatusBadge, { backgroundColor: tx.status === 'Completed' ? '#4CAF50' : '#FF9800' }]}>
                                    <Text style={stylee.transactionStatusText}>{tx.status}</Text>
                                </View>
                            </View>
                        ))}
                        <Pressable
                            style={[style.button, style.buttonClose]}
                            onPress={handleAddToManage}
                        >
                            <Text style={style.textStyle}>Add to Manage</Text>
                        </Pressable>

                        {modalMsg !== '' && (
                            <Text style={style.modalMessage}>{modalMsg}</Text>
                        )}

                        <Pressable
                            style={[style.button, style.buttonClose, { backgroundColor: 'red' }]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={style.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </>
    )
}

const style = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        width: '100%',
        height: 'auto',
        backgroundColor: '#FFC107',
    },
    modalMessage: {
        marginTop: 10,
        color: '#555',
        fontSize: 14,
        textAlign: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        width: '100%',
        marginTop: 20
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
export default MyWalletCard