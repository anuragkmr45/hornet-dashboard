import React, { useEffect } from 'react';
import { View, Text, Animated, Image } from 'react-native';
import { AppSplashStyles } from '../styles/AppSplashStyles';

const AppSplashScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
    const styles = AppSplashStyles;

    const fadeAnim = new Animated.Value(0); 
    const scaleAnim = new Animated.Value(0.8);

    useEffect(() => {
        // Start fade-in and scale-in animation
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
            // Start fade-out animation after a short delay
            setTimeout(() => {
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }).start(() => {
                    onFinish(); // Trigger navigation when animation completes
                });
            }, 1000); // Delay before fade-out
        });

        return () => {
            fadeAnim.stopAnimation();
            scaleAnim.stopAnimation();
        };
    }, [fadeAnim, scaleAnim, onFinish]);

    return (
        <View style={styles.container}>
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
