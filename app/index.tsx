import React, { useEffect, useRef, useState } from "react";
import { View, Image, StyleSheet, TextInput, Text, TouchableOpacity, Animated } from "react-native";
import { Button } from "tamagui";
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginCard() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    // Animated values for glowing effect
    const shadowRadius = useRef(new Animated.Value(15)).current;
    const shadowOpacity = useRef(new Animated.Value(0.4)).current;

    useEffect(() => {
        const glowAnimation = Animated.loop(
            Animated.sequence([
                Animated.timing(shadowRadius, {
                    toValue: 10,
                    duration: 1000,
                    useNativeDriver: false,
                }),
                Animated.timing(shadowRadius, {
                    toValue: 5,
                    duration: 1000,
                    useNativeDriver: false,
                }),
            ])
        );
        
        const opacityAnimation = Animated.loop(
            Animated.sequence([
                Animated.timing(shadowOpacity, {
                    toValue: 0.6,
                    duration: 1000,
                    useNativeDriver: false,
                }),
                Animated.timing(shadowOpacity, {
                    toValue: 0.4,
                    duration: 1000,
                    useNativeDriver: false,
                }),
            ])
        );

        glowAnimation.start();
        opacityAnimation.start();

        return () => {
            glowAnimation.stop();
            opacityAnimation.stop();
        };
    }, [shadowRadius, shadowOpacity]);

    return (
        <View style={styles.container}>
            {/* Background Layer */}
            <LinearGradient
                colors={['#1c1f2b', '#000000']}
                style={styles.background}
            />

            {/* Login Card Content */}
            <Animated.View
                style={[
                    styles.cardContent,
                    {
                        shadowRadius: shadowRadius,
                        shadowOpacity: shadowOpacity,
                    },
                ]}
            >
                {/* Header with Logo and Title */}
                <View style={styles.header}>
                    <Image
                        source={require("../assets/images/mfu-logo.png")} // Replace with the path to your MFU logo
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={styles.loginText}>Sign in to Super App</Text>
                </View>

                {/* Email Input */}
                <View style={styles.inputWrapper}>
                    <TextInput
                        placeholder="Your email address"
                        value={email}
                        onChangeText={setEmail}
                        style={styles.textField}
                        placeholderTextColor="#b0b3b8"
                        keyboardType="email-address"
                    />
                </View>

                {/* Password Input */}
                <View style={styles.inputWrapper}>
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        style={styles.textField}
                        placeholderTextColor="#b0b3b8"
                        secureTextEntry
                    />
                </View>

                {/* Continue by MFU Button */}
                <Button style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </Button>


                {/* OR Divider */}
                <View style={styles.dividerContainer}>
                    <View style={styles.dividerLine} />
                    <Text style={styles.orText}>OR</Text>
                    <View style={styles.dividerLine} />
                </View>

                {/* Continue with Google Button */}
                <Button style={styles.googleButton}>
                    <Image
                        source={{ uri: "https://accounts.google.com/favicon.ico" }}
                        style={styles.googleIcon}
                    />
                    <Text style={styles.buttonText}>Continue by Lamduan Email</Text>
                </Button>

                {/* Forgot Password Link */}
                <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#1c1f2b',
    },
    background: {
        ...StyleSheet.absoluteFillObject,
    },
    cardContent: {
        width: "80%",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#4a90e2",
        shadowOffset: { width: 0, height: 0 },
    },
    header: {
        alignItems: "center",
        marginBottom: 20,
    },
    logo: {
        height: 50,
        width: 50,
        marginBottom: 10,
    },
    loginText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#ffffff",
    },
    inputWrapper: {
        width: "100%",
        marginBottom: 15,
    },
    textField: {
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 16,
        color: '#ffffff',
        borderWidth: 1,
        borderColor: '#3a3f4b',
    },
    button: {
        width: "100%",
        backgroundColor: "#4a90e2",
        paddingVertical: 10,
        borderRadius: 8,
        marginBottom: 15,
        alignItems: "center",
    },
    dividerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: "#b0b3b8",
    },
    orText: {
        marginHorizontal: 8,
        color: "#b0b3b8",
    },
    googleButton: {
        width: "100%",
        backgroundColor: "#4285F4",
        paddingVertical: 10,
        borderRadius: 8,
        marginBottom: 15,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    googleIcon: {
        width: 14,
        height: 14,
        marginRight: 8,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    forgotPasswordText: {
        color: "#4a90e2",
        fontSize: 14,
        textDecorationLine: "underline",
    },
});