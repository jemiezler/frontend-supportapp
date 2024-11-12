import { useState } from "react";
import { View, Image, StyleSheet, TextInput } from "react-native";
import { Button } from "tamagui";

export default function Index() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", rowGap: 10 }}>
            <Image
                source={require("../assets/images/mfu-logo.png")}
                style={{ height: 50, width: 50 }}
            />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.textField}
            ></TextInput>
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setEmail}
                style={styles.textField}
            ></TextInput>
            <Button>Sign In</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    textField: {
        width: "80%",
        backgroundColor: "transparent",
        borderRadius: 10,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})
