import React, { useEffect } from 'react';
import { View, Text, Animated, Image, StatusBar } from 'react-native';
import { AppSplashStyles } from '../styles/AppSplashStyles';

const AppSplashScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
    const styles = AppSplashStyles;

    const fadeAnim = new Animated.Value(0); 
    const scaleAnim = new Animated.Value(0.8);

    useEffect(() => {
        
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true,
            }),
        ]).start(() => {
            
            setTimeout(() => {
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }).start(() => {
                    onFinish();
                });
            }, 1000);
        });

        return () => {
            fadeAnim.stopAnimation();
            scaleAnim.stopAnimation();
        };
    }, [fadeAnim, scaleAnim, onFinish]);

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} animated={true} />
            <Animated.View
                style={[
                    styles.logoContainer,
                    {
                        opacity: fadeAnim,
                        transform: [{ scale: scaleAnim }],
                    },
                ]}
            >
                <Image
                    source={require('../assets/honret_logo.webp')}
                    style={styles.logo}
                />
                <Text style={styles.appName}>Honret Dashboard</Text>
            </Animated.View>
        </View>
    );
};

export default AppSplashScreen;
